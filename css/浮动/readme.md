# 浮动存在的意义
1. 文字环绕

# 文档流
1. 从上往下，从左往右的布局排列，遵从标签的特性
2. 浮动会导致元素脱离文档流

# 浮动的负面影响
1. 浮动元素的高度不计算在父容器的高度之内，这就会导致父容器的后续容器布局和该浮动元素重叠

- 清除浮动：
  1. 设置父容器的高度
  2. 在浮动元素最末尾增加一个子容器，在子容器上做清除浮动
  3. 伪元素 xxx::after{
      content: "";
      clear: both;
      display: block;
    }
  4. 给后面被影响的元素添加清除浮动


# BFC  --- Block Formatting Context
一个拥有隔离空间的容器

用来解决父子容器 margin 重叠的问题

# 创建BFC 的方法
1. overflow: hidden || auto || overlay || scroll
2. 定位：position: absolute || fixed
3. display: inline-xxxx || flex || grid
4. display: table || table-xxx
5. 浮动： float: right || left

# 特征
1. bfc 容器是让处于 bfc 内部的元素与外部的元素相互隔离，使外部元素的定位不会相互影响
2. 解决外边距重叠问题
3. bfc 容器在计算高度时，会将浮动元素的高度也计算在内