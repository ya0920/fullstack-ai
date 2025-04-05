# 企业级框架
 - 约定大于定义


# 需要掌握基础的 react，不多

# 需要一点 Node 的知识，但不多

# Next.js     Nuxt.js     Nest.js
1. Next.js 是一个基于 React 的框架
2. Nuxt.js 是一个基于 Vue 的框架
3. Nest.js 是一个基于 Node 的框架

# 路由
1. Pages 路由
2. App 路由  (新版本推荐)

- 基于 fs 文件系统的路由
- 一个文件就可以是一个路由

- 定义路由 
    文件夹被用来定义成了路由
- 定义页面
    必须是一个 page.js 的文件
- 定义布局
    1. 在某个文件夹下定义一个 layout.js 的文件，layout.js 会被用来作为这个文件夹下所有页面的布局组件
    2. 根布局：app/layout.js
- 定义模板
    1. 创建 template.js 的文件，template.js 会被用来作为这个文件夹下所有页面的模板组件
    2. layout 包裹 template 包裹 page

 ### 布局和模板的区别
 1. 布局中的状态是共享的，持久的
 2. 模板中的状态是不共享的，切换页面会重新渲染

- 定义加载页面
 1. 创建 loading.js 的文件，loading.js 会被用来作为这个文件夹下所有页面的加载页面组件
 2. 同级别的 Page 可以导出一个 async，或者使用 use，让 loading 组件等待数据加载完成后消失

- 定义错误处理
 1. 创建 error.js 的文件，error.js 会被用来作为这个文件夹下所有页面的错误页面组件
 2. 在同层级的 page 中出现错误，还被 error 组件捕获到

- 定义 404
 app/not-found.js