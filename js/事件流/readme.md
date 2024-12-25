# 事件流
 1. 捕获阶段 -- 事件行为从 window 上向目标元素传播
 2. 目标阶段 -- 事件行为在目标元素上触发
 3. 冒泡阶段 -- 事件行为从目标元素上向 window 上传播

 - js 中的事件离开目标处后，默认都是在冒泡阶段触发的


# onclick 和 addEventListener 的区别
 1. onclick 事件在冒泡阶段触发，且不能人为控制
 2. onclick 只能同时绑定一个相同的事件

# 阻止事件流
 1. e.stopPropagation();
 2. e.stopImmediatePropagation()  -- 额外：组织同一个 dom 结构下其他相同事件的触发

# 事件代理
 借助事件的冒泡机制，将原本应该批量绑定在子容器的事件绑定在父容器上，然后通过事件对象的 target 来判断事件源

 - input 标签上的 focus 和 blur 事件无法被代理
 