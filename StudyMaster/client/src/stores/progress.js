import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useProgressStore = defineStore('progress', () => {
  // 从localStorage加载初始状态
  const loadState = (key, defaultValue) => {
    try {
      return JSON.parse(localStorage.getItem(key)) || defaultValue
    } catch {
      return defaultValue
    }
  }

  // 状态定义
  const tasks = ref(loadState('progress_tasks', []))
  const selectedDate = ref(loadState('selected_date', ''))
  const completedCount = ref(0)
  const totalCount = ref(0)
  const masteredPoints = ref(0)
  const totalPoints = ref(0)

  // 自动保存到localStorage
  watch([tasks, selectedDate], ([newTasks, newDate]) => {
    localStorage.setItem('progress_tasks', JSON.stringify(newTasks))
    localStorage.setItem('selected_date', JSON.stringify(newDate))
  }, { deep: true })

  // Actions
  const updateProgress = (completed, total) => {
    completedCount.value = completed
    totalCount.value = total
  }

  const updateMastery = (mastered, total) => {
    masteredPoints.value = mastered
    totalPoints.value = total
  }

  const persistTasks = () => {
    localStorage.setItem('progress_tasks', JSON.stringify(tasks.value))
  }

  return {
    tasks,
    selectedDate,
    completedCount,
    totalCount,
    masteredPoints,
    totalPoints,
    updateProgress,
    updateMastery,
    persistTasks
  }
})