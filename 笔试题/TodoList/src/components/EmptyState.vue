<template>
  <div class="empty-state">
    <img src="@/assets/empty.svg" alt="暂无任务" class="empty-icon" />
    <p class="empty-text">该分类下暂无任务~</p>
  </div>
</template>

<style scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.empty-icon {
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
}

.empty-text {
  font-size: 16px;
  color: #6b7280;
}
</style>
