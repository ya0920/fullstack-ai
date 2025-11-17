// 本地存储键名（统一管理，便于后续修改）
const STORAGE_KEY = 'todoList';

export const storageUtils = {
  /**
   * 读取本地存储的任务列表
   * @returns {Array} 任务数组（无数据时返回空数组）
   */
  getTodos() {
    const storedData = localStorage.getItem(STORAGE_KEY);
    // 兼容无数据场景，避免JSON.parse报错
    return storedData ? JSON.parse(storedData) : [];
  },

  /**
   * 保存任务列表到本地存储
   * @param {Array} todos - 待保存的任务数组
   */
  saveTodos(todos) {
    // localStorage仅支持字符串存储，需将数组JSON序列化
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },

  /**
   * 清空本地存储的所有任务
   */
  clearTodos() {
    localStorage.removeItem(STORAGE_KEY);
  }
};