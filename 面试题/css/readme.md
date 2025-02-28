# 1. 说说你对 css 盒子模型的理解
- 是什么
  浏览器渲染一个容器时，会把容器渲染成 4 个区域，分别是 content、padding、border、margin。由这4 个区域组成了一个盒子模型。

- 有什么特点
  1. 标准盒子模型：width = content
  2. IE 盒子模型： width = content + padding + border

  3. box-sizing: border-box; 启用IE盒子模型

# 2. 说说你对 css 选择器的理解
- 是什么
  1. id 选择器  #
  2. 类名选择器 .
  3. 标签选择器  h2
  4. 后代选择器  .wrap h2
  5. 子代选择器 .wrap > h2
  6. 相邻兄弟选择器 .wrap + h2
  7. 兄弟选择器 .wrap ~ h2
  8. 群组选择器 .wrap, h2
  9. 伪类选择器 a:hover a:visited
  10. 伪元素选择器 a::after
  11. 属性选择器 [type=text]

- 有什么特点
  !important > 内联 > id > 类名 > 标签选择器

# 3. 说说 em/rem/vh/vw 的区别
   - em: 相对于声明了font-size的父元素的字体大小
   - rem: 相对于根元素的字体大小
   - vh: 相对于视窗高度的百分比
   - vw: 相对于视窗宽度的百分比


   1. 移动端适配方案：rem  ||  媒体查询
   2. pc 端适配方案： % + 媒体查询  ||   rem

# 4. css中有哪些方式可以隐藏元素？区别？
   1. display: none;  不占据文档流，不触发事件
   2. opacity: 0;    占据文档流，触发事件
   3. visibility: hidden; 占据文档流，不触发事件
   4. clip-path: polygon(0 0,0 0,0 0,0 0); 占据文档流，不触发事件

   5. position: absolute;
   6. width: 0;height: 0;overflow: hidden;
   7. transform: scale(0);  占据文档流，不触发事件


# 5. 说说你对 BFC 的理解
- 是什么
浏览器渲染的一个特殊区域，有自己独特的渲染规则，BFC 容器是一个独立的容器，容器里面的子元素不会影响到外面的元素，反之亦然。

- 有什么特点
 1. bfc容器在计算高度时，会把浮动元素也考虑进去
 2. 子元素的盒模型不会影响到 bfc 外部的元素
 3. 其他特性和普通容器一样

- 怎么实现
  1. overflow: hidden || auto || scroll;
  2. float: left || right;
  3. position: absolute || fixed;
  4. display: inline-xxx  || table-xxxx || flex || grid || tabel;

- 应用场景
  1. 清除浮动
  2. 防止 margin 重叠
  3. 自适应两栏布局

# 6. 元素水平垂直居中的方法有哪些？
  1. flex
  2. 定位 + transform
  3. 定位 + margin负值   （需要知道子容器的宽高）
  4. 定位 + margin: auto;  （需要子容器有宽高）
  5. grid
  6. table

# 7. 说说你对 css 动画的理解
  - 是什么
    1. 渐变动画
    2. 转变动画
    3. 自定义动画

  - 实现方式
   1. transition
   2. transform
   3. animation + keyframes

# 8. 响应式布局的实现方式有哪些？
 - 根据视窗宽度来自动调节页面模块的大小和位置

 - 媒体查询
 - %
 - rem
 - vw/vh

# 9. css 性能优化
 1. 首页使用内联样式
 2. 异步加载 css
 3. 压缩
 4. 合理使用选择器    #app .content h3

# 10. 文本单行溢出省略号

# 11. css画三角形

# 12. 展示 12px 以下的字体

# 13. 聊聊 css 预处理器
  - 是什么
    1. 一种 css 语言
    2. 可以使用变量、函数、继承、混入、运算等功能
    3. 可以编译成 css 文件

  1. less
  2. sass
  3. stylus

# 14. 多栏布局

# 15. flex布局
1. 弹性容器会让子容器默认继承交叉轴上的 100% 
2. 默认情况下，子容器在主轴上是不放大，会缩小