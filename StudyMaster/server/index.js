const Koa = require('koa')  // commonjs
const app = new Koa()
const useRouters = require('./router/index.js')
const { bodyParser } = require("@koa/bodyparser"); // 解析post请求参数

const cors = require('@koa/cors'); // 跨域

// 解决跨域
app.use(cors());

// 解析post请求参数
app.use(bodyParser());

// 提供前端可以访问的接口
useRouters(app)

app.listen(3000, () => {
  console.log('server is running at port 3000')
})