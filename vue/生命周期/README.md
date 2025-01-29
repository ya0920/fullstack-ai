# 生命周期
- 组件从无到有，再到无

- 页面：配置了路由的组件 （要跟浏览器的 url 绑定的）

1. onBeforeMount()   组件挂载之前
2. onMounted()   组件挂载之后  ---- 获取 dom 结构
3. onBeforeUpdate()   组件更新之前
4. onUpdated()   组件更新之后
5. onBeforeUnmount()   组件卸载之前
6. onUnmounted()   组件卸载之后