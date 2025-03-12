# 页面渲染优化
 1. 从回流的角度：html 不要嵌套过深，减轻回流的压力
 2. css 尽量使用精确的选择器（id和类名）减轻回流的压力
 3. 代码压缩（减轻请求的压力）
 4. js 线程不能和渲染线程同时工作，async 异步加载，defer 异步加载且延迟加载
 5. js 代码压缩
 6. 图片（懒加载，预加载，骨架屏，压缩，精灵图）
 7. 缓存


# 谈谈你对 vue 的理解
 1. vue 是一个渐进式的单页应用框架（页面上只有一个html文件，靠组件和路由来切页面，在开发时需要什么就开发什么）
 2. MVVM 数据驱动（model view viewModel）：以数据来驱动页面更新，只要写模板代码，不需要去操作dom
 3. 组件化：提高代码的复用性，便于维护
 4. 便于开发的指令
 5. 虚拟 dom ：跨端开发，减少 dom 操作
 6. 生态系统丰富（路由，仓库，第三方框架）

# 谈谈你对spa的理解
  1. 整个项目只有一个页面
  2. 页面中的内容是动态的，以组件的形式展示，靠路由来映射匹配组件

  优点：
  1. 组件化开发，易于维护
  2. 页面切换快，体验好
  3. 前后端分离，提高开发效率
  4. 减轻服务器压力，提高性能

  缺点：
  1. 初次加载慢
  2. 不利于SEO

  - ssr

# 说说你的 vue 生命周期的理解
 - vue 组件从创建到销毁的过程，其中官方提供了一系列的钩子函数
 1. setup  ==  beforeCreate  +  created
 2. onBeforeMount  ==  beforeMount
 3. onMounted  ==  mounted
 4. onBeforeUpdate  ==  beforeUpdate
 5. onUpdated  ==  updated
 6. onBeforeUnmount  ==  beforeUnmount
 7. onUnmounted  ==  unmounted
 8. onActivated  ==  activated
 9. onDeactivated  ==  deactivated

# 说说你对双向绑定的理解
 - 是什么
  v-model = v-on + v-bind 修改数据，页面同步更新，页面内容修改，数据也会同步更新

 - 原理：model view viewModel
 - ViewModel
    1. Observer 监听器
    2. Compile 解析器


 - 双向绑定的原理
  1. 单向绑定：变量被处理成响应式的过程中会为变量做依赖收集，当变量的值变更时，触发 setter ，并执行依赖，导致视图更新
  2. 双向绑定：视图更新用等同于用户触发了 input 函数，修改响应式变量，进而又导致 setter 触发


# vue 的组件通信
 1. 父子组件通讯
    1. 父组件用 v-bind 传递数据给子组件，子组件用 defineProps 接收数据
    2. 父组件用 provide 来向下提供数据，子组件用 inject 向上注入数据（流向不明确），readonly 包裹对象是只读的。
      - 若是没有仓库：可以在 app.vue 用 provide 向下提供，（子组件可以修改引用数据，浅拷贝）
 2. 子父组件通讯
    1. 子组件用 defineREmits 定义事件并发布，父组件用 v-on 订阅事件
    2. 子组件通过 defineExpose 暴露数据，父组件通过 Ref 引用子组件中的数据（childRef?.list）
    3. 父组件通过 v-model 绑定数据给子组件，子组件通过 defineProps 接收，然后定义 updata:xxx 事件并直接修改父组件给过来的数据，但是一定要发布这个事件，不然会有问题
 3. 兄弟组件通讯
    1. 在外部的js文件中定义响应式变量，同时引入到两个组件中，因为是响应式，所以两个组件都能修改这个变量，实现组件通讯
    2. pinia

# v-if 和 v-show 的区别
 1. 控制手段：v-if 为 false 时，不加载 dom 树， v-show = false，是用 display=none
 2. 编译不同：v-if 控制的组件会触发生命周期（有重新编译和卸载的过程），而 v-show 不会
 3. 性能：v-if 有更高的切换开销


# v-if 可以和 v-for 一起使用吗
 - 在 vue3 中可以，但不推荐  v-if 的优先级比 v-for 高
 - 在 vue2 中不行            v-for 的优先级比 v-if 高


# SPA 首屏加载优化
 - 首屏加载慢
  1. 单页应用需要把所有的页面代码都执行完毕，首屏才会加载
  2. 加载 js 脚本
  3. 网络延时

 - 路由懒加载
  1. 路由懒加载
  2. SSR服务端渲染
  3. 骨架屏
  4. UI 框架按需加载


# 为什么 data 要是一个函数
 - 如果 data 是一个对象，那么当组件被多次复用时，会导致数据共享，会出现数据污染的问题。因为 data 必须是一个函数，返回一个对象，每个组件的实例都有一个自己的对象

# 说说你对 vue 中的 nextTick 的理解
 - vue 官方给我们提供的异步函数，作用是在 dom 更新完成之后执行延迟回调
 - 应用场景：当我们需要 dom 更新之后的数据
 - 原理：在拥有 MutationObserver 的环境中，使用 MutationObserver监听，在 dom 更新后出发回调，是微任务
         在不支持 MutationObserver 的环境中，使用 setTimeOut 来触发回调，是宏任务