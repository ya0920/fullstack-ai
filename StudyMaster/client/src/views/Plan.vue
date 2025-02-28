<template>
  <div class="plan-container">
    <header class="page-header">
      <p class="title">复习日历</p>
    </header>
    <Calendar :plans="reviewPlans" :completed-dates="completedDates" @date-click="handleDateClick" />
    <div class="review-tasks">
      <p class="task">任务</p>
      <TaskTable :tasks="filteredTasks" @select="handleTaskSelect" @click="handleTaskClick" />
    </div>
    <div class="progress-info">
      <p>已完成 {{ completedTaskCount }} / {{ totalTaskCount }} 任务</p>
      <el-progress :percentage="completedRate" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useProgressStore } from '@/stores/progress'
import Calendar from '@/components/Calendar.vue'
import TaskTable from '@/components/TaskTable.vue'

const router = useRouter()
const progressStore = useProgressStore()

// 直接使用store中的任务数据
const reviewTasks = computed(() => progressStore.tasks)

// 状态初始化
const selectedDate = ref(progressStore.selectedDate)
const completedDates = ref([])

// 计算属性
const filteredTasks = computed(() => {
  const targetDate = formatDate(selectedDate.value)
  return targetDate
    ? reviewTasks.value.filter(t => formatDate(t.date) === targetDate)
    : reviewTasks.value
})

const completedTaskCount = computed(() =>
  filteredTasks.value.filter(task => task.completed).length
)

const totalTaskCount = computed(() => filteredTasks.value.length)

const completedRate = computed(() =>
  totalTaskCount.value === 0 ? 0 : Math.round(
    (completedTaskCount.value / totalTaskCount.value) * 100
  )
)

// 公共方法
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toISOString().split('T')[0]
}

const handleDateClick = (date) => {
  progressStore.selectedDate = date === progressStore.selectedDate ? '' : date
  selectedDate.value = progressStore.selectedDate
}

const handleTaskSelect = (selectedIds) => {
  // 直接更新store中的任务状态
  progressStore.tasks = progressStore.tasks.map(task => ({
    ...task,
    completed: selectedIds.includes(task.id)
  }))
}

const handleTaskClick = (taskId) => {
  router.push(`/question-detail/${taskId}`)
}

// 添加自动更新监听
watch(
  () => progressStore.tasks,
  () => {
    updateCompletedDates()
  },
  { deep: true }
)

watch(
  selectedDate,
  () => {
    updateCompletedDates()
  }
)

const updateCompletedDates = () => {
  // 更新本地完成日期
  const dates = filteredTasks.value
    .filter(t => t.completed)
    .map(t => formatDate(t.date))
  completedDates.value = [...new Set(dates)]

  // 更新全局进度
  progressStore.updateProgress(
    completedTaskCount.value,
    totalTaskCount.value
  )

  // 计算掌握率
  const totalPoints = filteredTasks.value.length * 10
  const masteredPoints = filteredTasks.value
    .filter(t => t.completed)
    .length * 8
  progressStore.updateMastery(masteredPoints, totalPoints)
}

// 初始化
onMounted(() => {
  // 初始化默认任务（仅首次加载时）
  if (progressStore.tasks.length === 0) {
    progressStore.tasks = [
      {
        id: 1,
        date: '2025-03-01',
        subject: '数学',
        knowledgePoint: '一元二次函数',
        taskName: '复习数学第一章：函数的概念与性质',
        progress: '50%',
        deadline: '2024-12-15',
        description: '函数是数学的基础概念...',
        completed: false
      },
      {
        id: 2,
        date: '2025-03-03',
        subject: '语文',
        knowledgePoint: '古诗词鉴赏',
        taskName: '背诵语文古诗词',
        progress: '30%',
        deadline: '2024-12-10',
        description: '古诗词是语文考试的重要内容...',
        completed: false
      },
      {
        id: 3,
        date: '2025-03-05',
        subject: '英语',
        knowledgePoint: '时态语法',
        taskName: '复习英语语法',
        progress: '40%',
        deadline: '2024-12-12',
        description: '英语语法是英语学习的难点...',
        completed: false
      }
    ]
  }
  updateCompletedDates()
})

</script>


<style lang="less" scoped>
.plan-container {
  padding-bottom: 60px;
  background-color: white; // 设置页面背景色为白色
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0 0 0;

  .title {
    font-weight: 600;
    font-size: 18px;

    margin: 12px 0 12px 30px;
    text-align: left;
  }
}

.view-mode {
  display: flex;
}

.review-tasks {
  padding: 16px;

  .task {
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    margin-left: 14px;
    margin-bottom: 16px;
  }
}

.progress-info {
  padding: 16px;
  margin-bottom: 12px;
}

.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 12px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.router-link {
  text-decoration: none;
  color: #666;
}
</style>