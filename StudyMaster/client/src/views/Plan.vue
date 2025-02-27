<template>
  <div class="plan-container">
    <header class="page-header">
      <p class="title">复习日历</p>
    </header>
    <Calendar :plans="reviewPlans" @date-click="handleDateClick" />
    <div class="review-tasks">
      <p class="task">任务</p>
      <el-table :data="reviewTasks" style="width: 100%" show-overflow-tooltip>
        <el-table-column prop="taskName" label="任务名称" width="200" show-overflow-tooltip />
        <el-table-column prop="progress" label="复习进度" width="120" show-overflow-tooltip />
        <el-table-column prop="deadline" label="截止日期" width="150" show-overflow-tooltip />
        <el-table-column prop="description" label="任务描述" show-overflow-tooltip />
        <el-table-column label="操作" width="100">
          <template #default="scope">
            <el-button v-if="!scope.row.completed" type="primary" size="mini" @click="goToWrongQuestionPage(scope.row)">
              复习
            </el-button>
            <el-button v-if="scope.row.completed" type="success" size="mini" disabled>
              已完成
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="progress-info">
      <p>已完成 {{ completedTaskCount }} / {{ totalTaskCount }} 任务</p>
      <el-progress :percentage="completedRate" />
    </div>
    <div class="bottom-nav">
      <router-link to="/">首页</router-link>
      <router-link to="/review-plan">复习计划</router-link>
      <router-link to="/my">我的</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Calendar from '@/components/Calendar.vue';
import { ElButton, ElProgress, ElTable, ElTableColumn } from 'element-plus';
import { useRouter } from 'vue-router';
import Question from '@/views/Question.vue';

const router = useRouter();

// 添加日期选择状态
const selectedDate = ref('')
const filteredTasks = ref([])

// 处理日期点击
const handleDateClick = (date) => {
  selectedDate.value = date
  filterTasksByDate(date)
}

// 根据日期过滤任务
const filterTasksByDate = (date) => {
  filteredTasks.value = reviewTasks.value.filter(task => 
    task.date === formatSelectedDate(date)
  )
}

// 格式化日期为YYYY-MM-DD
const formatSelectedDate = (dateString) => {
  return new Date(dateString).toISOString().split('T')[0]
}

// 模拟复习计划数据
const reviewPlans = ref([
  { date: '2025-03-01', completed: true },
  { date: '2025-03-03', completed: false },
  { date: '2025-03-05', completed: true },
  { date: '2025-03-07', completed: false }
]);

// 模拟复习任务数据
const reviewTasks = ref([
  {
    taskName: '复习数学第一章：函数的概念与性质，重点复习函数的定义域、值域以及单调性的证明方法，结合大量练习题巩固知识点',
    progress: '50%',
    deadline: '2024-12-15',
    description: '函数是数学的基础概念，在考试中占比较大，需要深入理解其性质和应用。通过做练习题，熟悉各种题型的解题思路。',
    completed: false
  },
  {
    taskName: '背诵语文古诗词，包括《登高》《蜀道难》等经典篇目，理解诗词的含义和意境，掌握重点字词的解释和用法',
    progress: '30%',
    deadline: '2024-12-10',
    description: '古诗词是语文考试的重要内容，不仅要背诵，还要理解诗词背后的文化内涵和作者的情感表达。',
    completed: false
  },
  {
    taskName: '复习英语语法，重点复习时态、语态和从句的用法，通过阅读和写作练习提高语法运用能力',
    progress: '40%',
    deadline: '2024-12-12',
    description: '英语语法是英语学习的难点，需要通过大量的练习来熟练掌握，提高语言表达的准确性。',
    completed: false
  }
]);

const completedTaskCount = computed(() => reviewTasks.value.filter(task => task.completed).length);
const totalTaskCount = computed(() => reviewTasks.value.length);
const completedRate = computed(() => (totalTaskCount.value === 0 ? 0 : (completedTaskCount.value / totalTaskCount.value) * 100));

const goToWrongQuestionPage = (task) => {
  // 跳转到错题页面，并传递任务信息和更新任务状态的方法
  router.push({
    name: 'WrongQuestionPage',
    params: { task },
    query: { updateTasks: updateTaskStatus }
  });
};

const updateTaskStatus = (task, isCompleted) => {
  const index = reviewTasks.value.findIndex(t => t === task);
  if (index !== -1) {
    reviewTasks.value[index].completed = isCompleted;
  }
};
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
  // border-bottom: 2px solid #E5E7EB;

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
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  .task{
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    margin-left: 14px
    ;
    margin-bottom: 16px;
  }
}

.progress-info {
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
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