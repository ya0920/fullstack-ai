# template
    （在 html 中写 js 语法）

# jsx
    （在 js 中写 html 语法）
    适合当前组件动态性非常高，组件本身的结构体都要变更，通常用来开发更加复杂且灵活的组件

 - 减少代码冗余
 - 组件化开发更灵活


# h函数

vue 代码的步骤：template 模板 => 编译（得到对象）=> render 函数 渲染（得到一个 dom 树）=> 生成真实的 html

可以创建虚拟 dom 的函数统称为 h 函数

# 虚拟 dom
在 vue 或者 react 语法中，把 html 中的 js 转化成虚拟 dom 对象，中转站

 - 新旧虚拟 dom 对比，找出差异 => diff 算法，砌墙
 - 跨段开发，一个代码可以打包成各种端的产品



# jsx 开发 todolist 组件
    1. 安装插件 @vitejs/plugin-vue-jsx（用于将 jsx 语法转变为 h() 函数返回值一样的结构）

# jsx vs template
    1. jsx 可以支持更动态的需求
    2. jsx 可以在一个文件内返回多个组件