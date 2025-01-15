const Koa = require('koa')  // commonjs
const app = new Koa()
const useRouters = require('./router/index.js')

const cors = require('@koa/cors'); // 跨域

// 解决跨域
app.use(cors());

// 提供前端可以访问的接口
useRouters(app)

// app.use((ctx, next) => {
//   if (ctx.url === '/home') { // 用路由的方式
//     // 链接数据库
//     // 查数据库
//     // 返回数据
//     ctx.body = '返回数据'
//   }
// })

app.listen(3000, () => {
  console.log('server is running at port 3000')
})