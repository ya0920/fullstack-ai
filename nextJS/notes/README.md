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
1. npm i marked 把 markdown 转换为 html
2. npm i sanitize-html  清理 html 中的标签和属性，防止xss攻击
3. 在预览页面下添加loading组件，他会在页面加载完成后消失