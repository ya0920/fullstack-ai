# koa
- ctx 是 koa 提供的上下文对象，包含了 request 和 response 两个对象
- ctx.response.type 设置响应类型，让浏览器知道改以什么方式解析响应体

-路由
    是根据不同的请求方法和请求路径来执行不同的出路函数机制，可以用来实现 RESTful API
    koa 的路由无法直接解析 post 传递的参数，需要使用 @koa/bodyparser 中间件来解析 post 请求的参数

- 中间件
    就是一个函数

- 洋葱模型
    中间件的执行顺序
