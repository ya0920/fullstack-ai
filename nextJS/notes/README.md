# 创建项目

# 配置路径别名
 - jsconfig.json

# 修改根布局和根页面


# 数据请求
 - Redis
 - npm i ioredis

# Sidebar 开发
1. Sidebar 组件
2. SidebarNoteList 组件
3. SidebarNoteItem 组件
4. SidebarNoteItemContent 组件的样式  

# 骨架屏
 - Suspense 传入 fallback = {<Skeleton />} 当内部组件加载完成后，会替换掉 fallback 中的内容 （允许推迟渲染某些内容）
 - 依旧有一个很好的 SEO 效果

# 笔记的预览
1. npm i marked  把 markdown 转换成 html
2. npm i sanitize-html  清理 html 中的标签和属性  防止 xss 攻击  
%%script src="https://xxxx.js"%%%%/script%%
3. 在预览页面下 添加 loading 组件， 它会在页面加载完成后消失


# 笔记的编辑
 1. loading 组件 会作用于当前页面， 也会作用于子页面
 2. 客户端组件一般是不不能包含服务端组件的，但服务端组件可以包含客户端组件，但如果将服务端组件包含在客户端组件中，会导致客户端组件的内容被重复渲染， 所以需要使用 useClient 来标记客户端组件， 这时候服务端组件就会被认为是客户端组件，所有的代码依赖都会去到客户端

 3. Server Actions 


 # 国际化
 1. next-i18next    (新版本推荐  i18next 和 react-i18next)
 2. next-intl
 3. next-translate

 npm i i18next i18next-resources-to-backend react-i18next