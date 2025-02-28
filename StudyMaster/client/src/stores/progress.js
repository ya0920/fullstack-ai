// stores/progress.js
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useProgressStore = defineStore('progress', () => {
  // 从localStorage加载状态
  const loadState = (key, defaultValue) => {
    try {
      return JSON.parse(localStorage.getItem(key)) || defaultValue
    } catch {
      return defaultValue
    }
  }

  // 状态定义
  const dailyTasks = ref(loadState('daily_tasks', {}))
  const selectedDate = ref(loadState('selected_date', new Date().toISOString().split('T')[0]))

  // 自动保存
  watch([dailyTasks, selectedDate], ([tasks, date]) => {
    localStorage.setItem('daily_tasks', JSON.stringify(tasks))
    localStorage.setItem('selected_date', JSON.stringify(date))
  }, { deep: true })

  return {
    dailyTasks,
    selectedDate
  }
})