import { storageUtils } from './storage';

// 任务核心操作工具
export const taskUtils = {
  /** 初始化任务列表 */
  initTasks() {
    return (storageUtils.getTodos() || []).map(task => ({
      ...task,
      selected: false // 批量编辑用的临时状态，不持久化
    }));
  },

  /** 按分类筛选任务 */
  filterTasksByCategory(tasks, category) {
    return category === 'all' 
      ? [...tasks] 
      : tasks.filter(task => task.category === category);
  },

  /** 筛选并排序任务 */
  filterAndSortTasks(tasks, category, sortOrder) {
    const filtered = this.filterTasksByCategory(tasks, category);
    
    // 排序：1. 按完成状态 2. 按时间
    filtered.sort((a, b) => {
      if (a.completed !== b.completed) {
        return a.completed - b.completed;
      }
      const dateA = new Date(a.time).getTime();
      const dateB = new Date(b.time).getTime();
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });

    return filtered;
  },

  /** 批量更新任务状态 */
  batchUpdateTaskStatus(tasks, targetStatus) {
    return tasks.map(task => 
      task.selected ? { ...task, completed: targetStatus } : task
    );
  },

  /** 批量删除选中的任务 */
  batchDeleteSelectedTasks(tasks) {
    return tasks.filter(task => !task.selected);
  },

  /** 重置所有任务的 selected 状态 */
  resetTaskSelection(tasks) {
    return tasks.map(task => ({ ...task, selected: false }));
  }
};