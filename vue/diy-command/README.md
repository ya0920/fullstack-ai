# 自定义指令
1. 全局注册
2. 局部注册


- 定义指令
- 注册指令  （vue 认可这个指令） 
   1. 定义 install函数
   2. 调用 install 函数
- 调用指令


想要 vue 认可一段代码，必须要保证这段代码是一个install 对象或者 install 函数，
因为 vue.use 会调用 install 函数

app.directive(name, options)  directive会触发 options 中的 updated钩子函数


- 自定义指令的生命周期
1. created： 当指令所绑定的值被读取到时，会触发 created 钩子函数
2. beforeMount： 当指令所绑定的容器被首次渲染到页面前，会触发 beforeMount 钩子函数
3. mounted： 当指令所绑定的容器被首次渲染到页面后，会触发 mounted 钩子函数
4. beforeUpdate： 当指令所绑定的值更新前，会触发 beforeUpdate 钩子函数
5. updated： 当指令所绑定的值更新后，会触发 updated 钩子函数
6. beforeUnmount： 当指令所绑定的容器被移除前，会触发 beforeUnmount 钩子函数
7. unmounted： 当指令所绑定的容器被移除后，会触发 unmounted 钩子函数
