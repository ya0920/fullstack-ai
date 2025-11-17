// 选中状态管理工具：处理全选、选中计数等逻辑
export const selectionUtils = {
  /**
   * 计算选中/已完成任务数量
   * @param {Array} tasks - 任务数组
   * @param {boolean} isEditing - 是否为编辑模式（true: 统计 selected，false: 统计 completed）
   * @returns {number} 计数结果
   */
  getSelectedCount(tasks, isEditing) {
    return tasks.filter(task => isEditing ? task.selected : task.completed).length;
  },

  /**
   * 判断是否“全选/全完成”
   * @param {Array} tasks - 待判断的任务数组（筛选后的）
   * @param {boolean} isEditing - 是否为编辑模式
   * @returns {boolean} true: 全选/全完成，false: 未
   */
  isAllSelected(tasks, isEditing) {
    if (tasks.length === 0) return false;
    return isEditing 
      ? tasks.every(task => task.selected) 
      : tasks.every(task => task.completed);
  },

  /**
   * 全选/取消全选操作
   * @param {Array} tasks - 待操作的任务数组（筛选后的）
   * @param {boolean} targetState - 目标状态（true: 选中/完成，false: 取消）
   * @param {boolean} isEditing - 是否为编辑模式
   * @returns {Array} 更新后的任务数组
   */
  toggleAllSelection(tasks, targetState, isEditing) {
    return tasks.map(task => ({
      ...task,
      [isEditing ? 'selected' : 'completed']: targetState
    }));
  }
};