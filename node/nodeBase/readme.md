# node
js 不能直接做后端开发，是因为 js 内部不具有可以联调操作系统的 API
node 中用 c++ 开发了很多可以跟操作系统交互模块，但是 node 中内置了js 引擎，所以 node 可以读懂 js，也就是说 js 可以通过调用 node 中的各个模块来实现跟操作系统交互

# 模块化语法
1. CommonJS 规范：编程界已有的规范
2. ESmodules 规范：要在package.json里修改 "type": "module",

可以直接创建后缀 .mjs 和 .cjs

# 模块

