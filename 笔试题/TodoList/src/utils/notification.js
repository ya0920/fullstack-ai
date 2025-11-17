import { ref, provide, inject } from 'vue';

// 全局注入的key
const NOTIFICATION_KEY = Symbol('notification');

// 通知管理类（单例）
class NotificationManager {
  constructor() {
    this.notices = ref([]); // 存储所有通知
  }

  // 提供通知实例
  provide() {
    provide(NOTIFICATION_KEY, this);
  }

  // 注入通知实例
  static inject() {
    return inject(NOTIFICATION_KEY);
  }

  // 显示通知
  show(type, message, duration = 3000) {
    const top = this.notices.value.length * 52;
    this.notices.value.push({ type, message, top, duration });

    // 自动移除通知
    setTimeout(() => {
      this.remove(this.notices.value.length - 1);
    }, duration);
  }

  // 成功通知
  success(message, duration) {
    this.show('success', message, duration);
  }

  // 错误通知
  error(message, duration) {
    this.show('error', message, duration);
  }

  // 警告通知
  warning(message, duration) {
    this.show('warning', message, duration);
  }

  // 移除指定通知
  remove(index) {
    this.notices.value.splice(index, 1);
    this.notices.value.forEach((notice, i) => {
      notice.top = i * 52;
    });
  }

  // 清空所有通知
  clear() {
    this.notices.value = [];
  }
}

// 创建单例实例
export const notification = new NotificationManager();

export const showNotification = {
  success: (message, duration) => notification.success(message, duration),
  error: (message, duration) => notification.error(message, duration),
  warning: (message, duration) => notification.warning(message, duration),
  clear: () => notification.clear()
};