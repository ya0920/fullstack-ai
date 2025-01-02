# 移动端项目
1. 挑一个合适的 ui 框架 （ Vant ）
2. 不同屏幕尺寸的适配 （ rem + js ）lib-flexible/flexible
3. 数据可视化的库 （ Echarts ）

# 登录功能
1. 登录权限（登录状态保留、首页地址未登录进不去
2. 前端发登录请求，后端返回一个 token，前端将 token 存储本地，下次请求时，将 token 放在请求头中，后端验证token，如果 token 正确，返回数据，否则返回错误信息 401。
3. 纯静态页面不需要访问接口，不需要登陆权限


# 子父通信
- 子组件 defineExpose 将数据暴露出去,父组件通过 ref 获取子组件的实例,然后通过子组件实例获取数据.(state.xxx 被暴露时会取默认值,需要用 toRef 将他处理成双向响应)

# axios
 - 网络请求库

# 路由首尾
 - 全局守卫：beforeEach、 beforeResolve、 afterEash  每当路由变化时，都会触发
 - 组件内守卫
 - beforeEach((to, from, next)=>{}) 每次路由跳转前都会拦截下来，通过判断 to.path 的值来决定要去的页面是否需要 navBar，最后 next() 放行。

# 组件
1. 复用性
2. 独立的功能

 - 一般来说，组件中不写业务逻辑（接口请求），只写模板和样式