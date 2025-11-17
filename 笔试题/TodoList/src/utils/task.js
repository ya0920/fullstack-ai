import { storageUtils } from './storage';

// 任务相关工具函数：统一管理任务的核心操作
export const taskUtils = {
  /**
   * 初始化任务列表（添加 selected 临时状态）
   * @returns {Array} 带 selected 状态的任务数组
   */
  initTasks() {
    return (storageUtils.getTodos() || []).map(task => ({
      ...task,
      selected: false // 批量编辑用的临时状态，不持久化
    }));
  },

  /**
   * 筛选任务（按分类）
   * @param {Array} tasks - 原始任务数组
   * @param {string} category - 选中的分类（all 表示全部分类）
   * @returns {Array} 筛选后的任务数组
   */
  filterTasksByCategory(tasks, category) {
    return category === 'all' 
      ? [...tasks] 
      : tasks.filter(task => task.category === category);
  },

  /**
   * 排序任务（未完成在前，已完成在后）
   * @param {Array} tasks - 待排序的任务数组
   * @returns {Array} 排序后的任务数组
   */
  sortTasksByStatus(tasks) {
    return [...tasks].sort((a, b) => a.completed - b.completed);
  },

  /**
   * 筛选+排序组合操作
   * @param {Array} tasks - 原始任务数组
   * @param {string} category - 选中的分类
   * @returns {Array} 筛选并排序后的任务数组
   */
  filterAndSortTasks(tasks, category) {
    const filtered = this.filterTasksByCategory(tasks, category);
    return this.sortTasksByStatus(filtered);
  },

  /**
   * 批量更新任务状态（完成/未完成）
   * @param {Array} tasks - 原始任务数组
   * @param {boolean} targetStatus - 目标状态（true: 完成，false: 未完成）
   * @returns {Array} 更新后的任务数组
   */
  batchUpdateTaskStatus(tasks, targetStatus) {
    return tasks.map(task => 
      task.selected ? { ...task, completed: targetStatus } : task
    );
  },

  /**
   * 批量删除选中的任务
   * @param {Array} tasks - 原始任务数组
   * @returns {Array} 删除后的任务数组
   */
  batchDeleteSelectedTasks(tasks) {
    return tasks.filter(task => !task.selected);
  },

  /**
   * 重置所有任务的 selected 状态
   * @param {Array} tasks - 原始任务数组
   * @returns {Array} 重置后的任务数组
   */
  resetTaskSelection(tasks) {
    return tasks.map(task => ({ ...task, selected: false }));
  }
};