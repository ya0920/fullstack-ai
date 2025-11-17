<template>
  <div class="container">
    <!-- 头部标题 -->
    <header class="header">
      <h1 class="title">Todo List</h1>
      <p class="subtitle">简洁高效的个人任务管理工具</p>
    </header>

    <!-- 筛选与批量操作栏 -->
    <div class="toolbar">
      <!-- 分类筛选 -->
      <div class="category-select-wrapper">
        <select class="category-select" v-model="selectedCategory">
          <option value="all">全部分类</option>
          <option v-for="category in categoryConfig.list" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
        <img src="@/assets/arrow.svg" alt="下拉箭头" class="select-arrow" />
      </div>

      <!-- 批量操作按钮 -->
      <div class="batch-buttons">
        <button v-if="!isEditing" class="btn btn-primary" @click="enterEditMode">编辑</button>
        <template v-if="isEditing">
          <button class="btn btn-success" @click="batchComplete">
            批量完成 <span class="badge">{{ allCategorySelectedCount }}</span>
          </button>
          <button class="btn btn-warning" @click="batchIncomplete">
            批量未完成 <span class="badge">{{ allCategorySelectedCount }}</span>
          </button>
          <button class="btn btn-danger" @click="batchDelete">
            批量删除 <span class="badge">{{ allCategorySelectedCount }}</span>
          </button>
          <button class="btn btn-secondary" @click="exitEditMode">退出编辑</button>
        </template>
      </div>
    </div>

    <!-- 任务列表区域 -->
    <div class="task-section">
      <div class="task-header">
        <h2 class="task-title">任务列表 ({{ filteredTasks.length }}个任务)</h2>
        <!-- 时间排序 -->
        <button class="sort-btn" @click="toggleTimeSort">
          <img :src="sortIcon" alt="时间图标" class="sort-icon" />
          <span>{{ sortButtonText }}</span>
        </button>
      </div>

      <!-- 全选与选中计数：删除重复的全部分类提示 -->
      <div v-if="isEditing" class="select-all">
        <input type="checkbox" class="select-all-checkbox" v-model="selectAll" @change="toggleSelectAll" />
        <label>全选</label>
        <span class="selected-count">
          <!-- 只保留“本分类已选”，简洁清晰 -->
          本分类已选 {{ selectedCount }}/{{ filteredTasks.length }}
        </span>
      </div>

      <!-- 任务列表 -->
      <ul v-if="filteredTasks.length > 0" class="task-list">
        <li v-for="task in filteredTasks" :key="task.id" class="task-item" :class="{ completed: task.completed }">
          <input type="checkbox" class="task-checkbox" :checked="isEditing ? task.selected : task.completed"
            @change="toggleTaskSelection(task)" />
          <div class="task-content">
            <h3 class="task-title">{{ task.title }}</h3>
            <p v-if="task.description" class="task-desc">{{ task.description }}</p>
            <div class="task-meta">
              <span class="category-tag" :style="{ backgroundColor: getCategoryColor(task.category) }">
                {{ task.category }}
              </span>
              <span class="task-time">{{ task.time }}</span>
            </div>
          </div>
          <button class="edit-btn" @click="openEditModal(task)">
            <img src="@/assets/edit.svg" alt="编辑" class="edit-icon" />
          </button>
          <button class="delete-btn" @click="deleteTask(task.id)">
            <img src="@/assets/delete.svg" alt="删除" class="delete-icon" />
          </button>
        </li>
      </ul>
      <EmptyState v-else />
    </div>

    <!-- 悬浮添加按钮 -->
    <button class="add-btn" @click="openAddModal">+</button>

    <!-- 弹窗组件 -->
    <AddTodoModal 
      v-if="showModal" 
      :task-to-edit="editingTask"
      @close="closeModal" 
      @add-task="addTask"
      @edit-task="editTask"
    />
    <TopNotification :notices="notification.notices.value" @remove="notification.remove" />
  </div>
</template>

<script setup>
// 组件引入
import AddTodoModal from './components/TodoModal.vue';
import TopNotification from './components/TopNotification.vue';
import EmptyState from './components/EmptyState.vue';

// 依赖引入
import { ref, computed, watch } from 'vue';
import { categoryConfig } from '@/utils/category';
import { storageUtils } from '@/utils/storage';
import { notification } from '@/utils/notification';
import { taskUtils } from '@/utils/task';
import { selectionUtils } from '@/utils/selection';

// 引入 SVG 图标
import timeIconUp from '@/assets/time_up.svg';
import timeIconDown from '@/assets/time_down.svg';

// --- 响应式状态定义 ---
const showModal = ref(false);
const isEditing = ref(false);
const selectedCategory = ref('all');
const selectAll = ref(false);
const tasks = ref(taskUtils.initTasks());
const sortOrder = ref('desc'); // 'desc' 或 'asc'，默认为降序
const editingTask = ref(null); // 存储正在编辑的任务

// --- 计算属性 ---
const filteredTasks = computed(() => {
  return taskUtils.filterAndSortTasks(tasks.value, selectedCategory.value, sortOrder.value);
});

// 排序按钮的显示文本
const sortButtonText = computed(() => {
  return sortOrder.value === 'desc' ? '时间降序' : '时间升序';
});

// 动态排序图标
const sortIcon = computed(() => {
  return sortOrder.value === 'desc' ? timeIconDown : timeIconUp;
});

// 当前分类选中数（编辑模式）/ 当前分类已完成数（普通模式）
const selectedCount = computed(() => {
  if (isEditing.value) {
    return filteredTasks.value.filter(task => task.selected).length;
  }
  return filteredTasks.value.filter(task => task.completed).length;
});

// 全部分类选中数（用于按钮角标）
const allCategorySelectedCount = computed(() => {
  return isEditing.value ? tasks.value.filter(task => task.selected).length : 0;
});

// --- 数据持久化 ---
watch(
  tasks,
  (newTasks) => {
    const persistTasks = newTasks.map(({ selected, ...rest }) => rest);
    storageUtils.saveTodos(persistTasks);
  },
  { deep: true }
);

// --- 监听：同步全选框状态 ---
watch(
  [() => filteredTasks.value, isEditing],
  ([currentFilteredTasks, editing]) => {
    selectAll.value = selectionUtils.isAllSelected(currentFilteredTasks, editing);
  },
  { deep: true }
);

// --- 编辑模式相关方法 ---
const enterEditMode = () => {
  isEditing.value = true;
  notification.success('进入批量编辑模式，可跨分类勾选任务');
};

const exitEditMode = () => {
  isEditing.value = false;
  tasks.value = taskUtils.resetTaskSelection(tasks.value);
  selectAll.value = false;
};

// --- 任务核心操作方法 ---
const toggleTaskSelection = (task) => {
  if (isEditing.value) {
    task.selected = !task.selected;
  } else {
    task.completed = !task.completed;
    notification.success(task.completed ? '任务标记为完成' : '任务标记为未完成');
  }
};

const addTask = (newTask) => {
  tasks.value.unshift({
    ...newTask,
    id: Date.now(),
    completed: false,
    selected: false
  });
  notification.success('任务添加成功');
};

const editTask = (updatedTask) => {
  const index = tasks.value.findIndex(t => t.id === updatedTask.id);
  if (index !== -1) {
    tasks.value[index] = { ...tasks.value[index], ...updatedTask };
  }
  notification.success('任务更新成功');
};

const deleteTask = (taskId) => {
  if (confirm('确定删除该任务吗？')) {
    tasks.value = tasks.value.filter(task => task.id !== taskId);
    notification.success('任务删除成功');
  }
};

// --- 批量操作方法 ---
const toggleSelectAll = () => {
  const targetState = selectAll.value;
  const tasksToUpdate = filteredTasks.value;
  const updatedTasks = selectionUtils.toggleAllSelection(tasksToUpdate, targetState, isEditing.value);
  const updatedTaskIds = new Set(updatedTasks.map(task => task.id));

  tasks.value = tasks.value.map(task => {
    if (updatedTaskIds.has(task.id)) {
      return isEditing.value
        ? { ...task, selected: targetState }
        : { ...task, completed: targetState };
    }
    return task;
  });
};

const batchComplete = () => {
  const totalSelected = allCategorySelectedCount.value;
  if (totalSelected === 0) {
    notification.error('请先选择要操作的任务');
    return;
  }

  tasks.value = taskUtils.batchUpdateTaskStatus(tasks.value, true);
  notification.success(`成功标记 ${totalSelected} 个任务为完成`);
  exitEditMode();
};

const batchIncomplete = () => {
  const totalSelected = allCategorySelectedCount.value;
  if (totalSelected === 0) {
    notification.error('请先选择要操作的任务');
    return;
  }

  tasks.value = taskUtils.batchUpdateTaskStatus(tasks.value, false);
  notification.success(`成功标记 ${totalSelected} 个任务为未完成`);
  exitEditMode();
};

const batchDelete = () => {
  const totalSelected = allCategorySelectedCount.value;
  if (totalSelected === 0) {
    notification.error('请先选择要删除的任务');
    return;
  }

  if (confirm(`确定删除选中的 ${totalSelected} 个任务吗？`)) {
    tasks.value = taskUtils.batchDeleteSelectedTasks(tasks.value);
    notification.success(`成功删除 ${totalSelected} 个任务`);
    exitEditMode();
  }
};

// --- 辅助方法 ---
const openAddModal = () => {
  editingTask.value = null;
  showModal.value = true;
};

const openEditModal = (task) => {
  editingTask.value = task;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  editingTask.value = null;
};

const toggleTimeSort = () => {
  sortOrder.value = sortOrder.value === 'desc' ? 'asc' : 'desc';
};

const getCategoryColor = (category) => {
  return categoryConfig.getColor(category);
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 30px 100px;
  min-height: 100vh;
  background-color: #f3f4f6;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.title {
  font-size: 28px;
  color: #2563eb;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 14px;
  color: #6b7280;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.category-select-wrapper {
  position: relative;
  margin-right: 20px;
}

.category-select {
  padding: 8px 30px 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  background-color: #fff;
  appearance: none;
  cursor: pointer;
}

.select-arrow {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  pointer-events: none;
}

.batch-buttons {
  display: flex;
  gap: 8px;
}

.btn {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.btn-primary {
  background-color: #3b82f6;
  color: #fff;
}

.btn-success {
  background-color: #22c55e;
  color: #fff;
}

.btn-warning {
  background-color: #eab308;
  color: #fff;
}

.btn-danger {
  background-color: #ef4444;
  color: #fff;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: #fff;
  color: #ef4444;
  font-size: 12px;
  font-weight: 600;
  margin-left: 6px;
}

.btn-secondary {
  background-color: #6b7280;
  color: #fff;
}

.task-section {
  margin-bottom: 20px;
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.task-title {
  font-size: 18px;
  color: #1f2937;
}

.sort-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  font-size: 14px;
}

.sort-icon {
  width: 14px;
  height: 14px;
}

.select-all {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  color: #6b7280;
  font-size: 14px;
}

.select-all-checkbox {
  cursor: pointer;
}

.selected-count {
  margin-left: 8px;
}

.task-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0;
}

.task-item {
  flex: 1 1 calc(50% - 16px);
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  position: relative; /* 为按钮定位提供基准 */
}

.task-item:last-child {
  border-bottom: none;
}

.task-item.completed .task-title {
  text-decoration: line-through;
  color: #6b7280;
}

.task-checkbox {
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin-top: 4px;
}

.task-content {
  flex: 1;
}

.task-content .task-title {
  font-size: 16px;
  margin-bottom: 4px;
}

.task-desc {
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 4px;
}

.task-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #6b7280;
}

.category-tag {
  padding: 2px 8px;
  border-radius: 999px;
  color: #fff;
  font-size: 10px;
}

.task-time {
  color: #6b7280;
}

.edit-btn, .delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.edit-btn {
  margin-top: 4px;
}

.delete-btn {
  margin-top: 4px;
}

.edit-icon, .delete-icon {
  width: 16px;
  height: 16px;
}

.add-btn {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #2563eb;
  color: #fff;
  border: none;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
</style>