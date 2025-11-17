<template>
  <div class="notification-container">
    <div
      v-for="(notice, index) in notices"
      :key="index"
      class="notification"
      :class="`notification--${notice.type}`"
      :style="{ top: `${notice.top}px` }"
    >
      <!-- 类型图标 -->
      <span class="notification__icon">{{ getIcon(notice.type) }}</span>
      <!-- 通知文本 -->
      <span class="notification__content">{{ notice.message }}</span>
      <!-- 关闭按钮 -->
      <button class="notification__close" @click="removeNotice(index)">×</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 接收通知列表（由父组件通过provide/inject传递）
const props = defineProps({
  notices: {
    type: Array,
    default: () => []
  },
  // 自动关闭时长（默认3秒）
  duration: {
    type: Number,
    default: 3000
  }
});

// 向父组件发射删除通知事件
const emit = defineEmits(['remove']);

// 根据类型返回对应图标
const getIcon = (type) => {
  switch (type) {
    case 'success': return '✅';
    case 'error': return '❌';
    case 'warning': return '⚠️';
    default: return 'ℹ️';
  }
};

// 手动关闭
const removeNotice = (index) => {
  emit('remove', index);
};

// 自动关闭
onMounted(() => {
  props.notices.forEach((_, index) => {
    setTimeout(() => {
      emit('remove', index);
    }, props.duration);
  });
});
</script>

<style scoped>
.notification-container {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  width: 100%;
  max-width: 500px;
  padding-top: 16px;
  pointer-events: none;
}

.notification {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(-10px);
  animation: fadeIn 0.3s forwards;
  pointer-events: auto;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.notification--success {
  background-color: #22c55e;
}
.notification--error {
  background-color: #ef4444;
}
.notification--warning {
  background-color: #eab308;
}

.notification__icon {
  font-size: 16px;
}

.notification__content {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.notification__close {
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  padding: 0 4px;
}

.notification__close:hover {
  opacity: 0.8;
}
</style>