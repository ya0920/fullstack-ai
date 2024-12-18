const Koa = require('koa');
const app = new Koa();
const Router = require('@koa/router');
const router = new Router();
const { bodyParser } = require('@koa/bodyparser');

//解析请求体
app.use(bodyParser());

//首页的接口
router.get('/home', (ctx, next) => {

    const { id } = ctx.query;// 解构，get请求

    ctx.body = {
        code: 0,
        msg: 'success',
        data: {
            title: '首页',
            content: '这是首页的内容',
            id
        }
    }
});

//登录的接口
router.post('/login', (ctx) => {
    console.log(ctx.request.body); // ctx.request.body 获取 POST 请求的请求体数据
});

//让路由生效
app.use(router.routes());

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});