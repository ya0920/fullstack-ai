// 分类配置：统一管理分类名称和颜色
export const categoryConfig = {
  list: ['工作', '学习', '生活', '其他'],
  getColor(category) {
    const colorMap = {
      工作: '#2563eb',
      学习: '#10b981',
      生活: '#f59e0b',
      其他: '#9333ea'
    };
    return colorMap[category] || '#6b7280';
  }
};