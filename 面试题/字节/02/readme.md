1. http2.0特性
   1.多路复用
   2.二进制分帧  （解决队头阻塞问题）
   3.头部压缩
2. 同源策略    https://wwww.baidu.com:8080/index.html
   1.协议相同
   2.域名相同
   3.端口相同

3. 解决跨城的方法
  1. jsonp
  2. cors  (服务端在响应头中设置Access-Control-Allow-Origin: *，表示允许任何来源的请求)
  3. node 中间件
  4. nginx反向代理
  5. websocket 全双工通信
  6. postMessage <ifream>标签
  7. document.domain

4. jsonp原理
 - 借助script标签的src属性不受同源策略的限制，向服务器发送请求，给后端传递一个参数callback，后端将要返回的数据最为参数拼接到 callback() 中返回给前端，前端需要提前定义好callback函数，当接收到数据后，会自动执行callback函数，从而拿到数据。

5. 浏览器存储
    1. localstorage    永久存储 5M 
    2. sessionstorage  临时存储 5M
    3. cookies         临时存储 4K   后端 （可以在跨域的时候被携带上）
    4. indexedDB       永久存储 无穷大（取决于电脑硬盘有多大） 浏览器数据库  不能跨域

6. Localstorage怎么实现数据过期清除
   1. 存数据的时候，将数据的存入时间和过期时间存入localstorage
   2. 取数据的时候，先判断当前时间是否大于存入时间+过期时间，如果大于就删除数据

7. npm,pnpm,yarn有用过吗
   1. npm 
   - 速度慢，依赖管理混乱
   - 依赖扁平化，通过锁文件来锁定版本
   2. pnpm 
   - 速度快，依赖扁平化，基于内容寻址的存储机制，实现了离线模式，支持多项目管理
   - 依赖管理混乱
   3. yarn 
   - 速度快（实现了并发请求，利用了缓存机制，实现了离线模式），依赖扁平化
   4. 幽灵依赖
   - 没有在package.json中声明的依赖，但是在node_modules中存在的依赖。在pnpm中明确声明的依赖才能被项目访问
   
8.  css实现三角形
9.  Display:none 与 Visibiity:hidden的区别
    - display:none 该元素不占据文档流，不会回流重绘画，不可触发事件
    - visibility:hidden 该元素占据空间，不可触发事件

10. divA里面套divB，如果A元素没置了visibility：hidden，B元素设置了visibility:visible，B会展示吗？
   会

11. 如果A元素设置了display:none，B元素设置了display:block，B会展示吗
   不会
12. vue2vue3的区别
    1. 语法
    2. 源码，ts
    3. 速度 diff
    4. 更小
    5. 
13. 除了vite和webpack还有了解其他打包工具吗
    1.  rollup
    2.  esbuild
    3.  glup
    4.  
14. vite为什么快
15. 自己做u组件库要考虑到哪些问题
    1.  降低使用成本，增加开发成本，增加灵活性
    2.  组件设计的规范性
    3.  适配性
    4.  组件的文档实例
    5.  社区反馈迭代
    6.  组件的性能优化
    7.  组件的可维护性
    8.  组件的可扩展性

16. react hooks
17. 为什么useState不能使用在判断和循环语句中
    - react 不知道也不需要知道你把 useState 的返回值赋给了哪个变量，他根据代码的执行顺序来从上往下执行，一旦将 useState 的返回值放在了 if 这种条件语句当中，就会导致赋值顺序的错乱

18. 了解过react hooks的执行顺序的原理吗
19. 算法考察：数组扁平化
20. 问deepseek如何实现侧边栏历史对话按时间分类，超过30天的按月显示，并优化你的提示词以减少token使用？


