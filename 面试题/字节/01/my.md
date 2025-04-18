# let const var 区别
1. var 可以重复声明相同的变量，let 和 const 不可以
2. var 声明的变量就存在声明提升
3. var 声明的全局变量会挂载到 window 上，let 和 const 不会
4. let, const 声明的变量会形成块级作用域，var 不会


# 对象扁平化
1. 将原对象的属性值放到新对象中，当值为对象时，递归调用
2. 将上一次便利到的 key 传入递归中和下一次的 key 拼接，直到值不为对象

# event-loop
- js中为什么会有事件循环机制？
js 默认是单线程运行的，代码中的任务有耗时和不耗时的情况，如果不设计事件循环机制，那么耗时的任务会阻塞后面的任务执行
从上往下执行代码，遇到不耗时的直接执行，遇到耗时的先放到任务队列中，然后继续往下执行代码

任务队列： 宏任务队列、微任务队列

宏任务: setTimeout、setInterval、requestAnimationFrame、I/O、UI 渲染
微任务: Promise.then、await(后续的代码)、MutationObserver(观察 DOM 结构的属性变化)、process.nextTick


- await 
1. 后面同一行的代码当成同步代码执行
2. 后续的所有代码放到微任务队列中

- event-loop 执行顺序
1. 执行同步代码  (宏任务)
2. 执行微任务队列中的代码  (微任务)
3. 有需要的话，渲染页面
4. 执行宏任务队列中的代码  (宏任务) (也叫下一次事件循环的开始)