<template>
  <!-- 遮罩层 -->
  <div class="modal-mask" @click.self="$emit('close')">
    <!-- 弹窗主体 -->
    <div class="modal-container">
      <div class="modal-header">
        <h3>{{ isEditing ? '编辑任务' : '添加新任务' }}</h3>
        <button class="close-btn" @click="$emit('close')">×</button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="submitTask">
          <!-- 任务标题 -->
          <div class="form-item">
            <label>任务标题 <span class="required">*</span></label>
            <input
              type="text"
              v-model="taskTitle"
              placeholder="输入任务标题"
              class="input-field"
              :class="{'input-error': titleError}"
            />
            <p v-if="titleError" class="error-message">该项不能为空</p>
          </div>
          <!-- 任务描述 -->
          <div class="form-item">
            <label>任务描述</label>
            <textarea v-model="taskDescription" placeholder="输入任务详情" rows="3" class="input-field"></textarea>
          </div>
          <!-- 分类选择 -->
          <div class="form-item">
            <label>分类</label>
            <select v-model="taskCategory" class="input-field">
              <option v-for="category in categoryConfig.list" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
          </div>
          <div class="form-footer">
            <button type="button" class="btn cancel-btn" @click="$emit('close')">取消</button>
            <button type="submit" class="btn confirm-btn">{{ isEditing ? '保存' : '添加任务' }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps, onMounted, computed } from 'vue';
import { formatTime } from '@/utils/format';
import { categoryConfig } from '@/utils/category';
import { isTitleValid } from '@/utils/validate'; // 引入验证函数

const props = defineProps({
  taskToEdit: {
    type: Object,
    default: null
  }
});

const taskTitle = ref('');
const taskDescription = ref('');
const taskCategory = ref('其他');
const titleError = ref(false);

const emit = defineEmits(['add-task', 'edit-task', 'close']);

const isEditing = computed(() => !!props.taskToEdit);

// 如果是编辑模式，在组件挂载时回显数据
onMounted(() => {
  if (isEditing.value) {
    taskTitle.value = props.taskToEdit.title;
    taskDescription.value = props.taskToEdit.description;
    taskCategory.value = props.taskToEdit.category;
  }
});

const submitTask = () => {
  if (!isTitleValid(taskTitle.value)) {
    titleError.value = true;
    return;
  }
  titleError.value = false;

  if (isEditing.value) {
    // 编辑模式：触发 edit-task 事件
    emit('edit-task', {
      ...props.taskToEdit,
      title: taskTitle.value,
      description: taskDescription.value,
      category: taskCategory.value,
    });
  } else {
    // 添加模式：触发 add-task 事件
    const newTask = {
      title: taskTitle.value,
      description: taskDescription.value,
      category: taskCategory.value,
      time: formatTime(new Date()),
      completed: false,
    };
    emit('add-task', newTask);
  }

  // 清空表单并关闭弹窗
  taskTitle.value = '';
  taskDescription.value = '';
  taskCategory.value = '其他';
  emit('close');
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-container {
  background-color: #fff;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  box-sizing: border-box; /* 确保宽度包括 padding 和 border */
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
}

.modal-header h3 {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
}

.close-btn {
  background: none;
  border: none;
  font-size: 20px;
  color: #6b7280;
  cursor: pointer;
}

.modal-body {
  padding: 16px;
}

.form-item {
  margin-bottom: 16px;
}

.form-item label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #1f2937;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
}

.input-error {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}

.form-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 20px;
}

.btn {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.cancel-btn {
  background-color: #f3f4f6;
  color: #6b7280;
}

.confirm-btn {
  background-color: #2563eb;
  color: #fff;
}

.required {
  color: red;
}
</style>