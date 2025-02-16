const Koa = require('koa');
const axios = require('axios');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
// koa 没办法直接处理 post 请求的 body，需要引入 koa-bodyparser
const bodyParser = require('koa-bodyparser');
const response = require('koa/lib/response');

// app.use(async (ctx) => {     // 中间件
//     // 获取前端传过来的参数
//     // 利用 ajax ，将内容交给 deepseek 模型
//     // 模型返回结果
//     // 返回前端
//     if (ctx.url === '/') { // 当访问根目录时
//         const message = '你好';

//         //? 当前 openai 制定的标准
//         const data = {
//             "model": "deepseek-r1:1.5b", // 模型名称
//             "messages": [
//                 {
//                     "role": "user", // 角色
//                     "content": message
//                 }
//             ],
//             "stream": false // 是否流式返回
//         };

//         //? 跟 deepseek 进行通信，通过 ajax，axios，http 发送请求
//         const response = await axios.post('http://localhost:11434/api/chat', data);
//         console.log(response.data);

//         ctx.body = {
//             code: 200,
//             data: response.data.message.content
//         }
//     };

// });

app.use(async (ctx, next) => {  // 处理跨域
    ctx.set('Access-Control-Allow-Origin', '*');  // 允许所有域名访问我这个后端
    ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE'); // 允许的请求方法
    ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type'); // 允许的请求头
    // 请求预检（http协议规定每一个 http 请求发送前都会自动发送一个预检请求）
    if (ctx.method === 'OPTIONS') {
        ctx.status = 204
        return;
    }

    await next();
})

app.use(bodyParser());

router.post('/deepseek/chat', async (ctx) => {
    // console.log(ctx.request.body);
    const message = ctx.request.body.content;
    const data = {
        "model": "deepseek-r1:1.5b",
        "messages": [
            {
                "role": "user",
                "content": message
            }
        ],
        "stream": false
    };

    await axios.post("http://localhost:11434/api/chat", data).then(response => {
        console.log(response.data.message.content);
        ctx.body = {
            code: 200,
            content: response.data.message.content
        }
    })
    // console.log(response.data.message.content);
});

app.use(router.routes());

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});