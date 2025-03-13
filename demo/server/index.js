// index.js
const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors');
const router = require('./ocrRoute'); // 假设你的路由在这里

// 允许所有域名跨域请求（开发环境使用）
app.use(cors());

app.use(router.routes()).use(router.allowedMethods());


app.listen(3000, () => {
  console.log('Koa server running at http://localhost:3000');
});
