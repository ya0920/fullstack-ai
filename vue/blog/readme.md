# 前端项目的准备工作
1. 引入合适的 UI 框架
2. 处理默认的样式
3. 适配不同尺寸的屏幕（%）
4. css 的预处理器（less，sass，stylus）：浏览器读不懂，只是让你在开发的时候写得更舒服，vite帮你编译
5. 插槽 slot
 - 定义一个子组件，希望该子组件只做一个外层容器，子组件中间还可以放上 dom 元素，那么就要在该子组件中放上插槽
 - layoutLeftRight.vue：把样式做成一个组件，在组件里放上插槽 <slot name='xxx'>, 在父组件引入的子组件里放上<template v-slot:xxx>
  1. 匿名插槽
  2. 具名插槽

# 路由
1. npm i vue-router@4
2. 创建文件夹，文件 import引入，route和router，抛出
3. app.vue 放 <router-view></router-view>

# 后端
1. 初始化项目（npm init）
2. 安装 koa 框架（npm i koa）
3. 安装 koa—router 框架（npm i koa-router）
 定义路由，封装了路由的使用
4. 定义 mysql 配置文件
5. 封装数据库的连接

6. 封装xxx接口要执行的数据库操作的函数



# axios
后端发接口请求，既可以在windows环境下用也可以在node


# 跨域
- 浏览器自带的同源策略
  1. 同一个协议
  2. 同一个域名
  3. 同一个端口

http://      localhost    :3000      /article/getNewsArticleList
协议         域名          端口号     路径

1. 跨域是浏览器不接受后端的响应数据
2. 后端

