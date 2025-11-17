/**
 * 验证任务标题是否有效（非空）
 * @param {string} title - 任务标题
 * @returns {boolean} 如果标题不为空白字符串，则返回 true，否则返回 false
 */
export const isTitleValid = (title) => {
  return !!title && title.trim().length > 0;
};
