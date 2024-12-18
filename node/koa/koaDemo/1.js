const Koa = require('koa');
const fs = require('fs');

const app = new Koa();

const main = (ctx) => {
    // console.log(ctx.url);
    // ctx.body = 'Hello World';

    // ctx.response.type = 'html';
    // ctx.body = '<h2> Hello World </h2>';

    if (ctx.url === '/home') {
        ctx.response.type = 'html';
        ctx.body = fs.readFileSync('./assets/template.html');
        // 或者 ctx.body = fs.createReadStream('./assets/template.html');
    };
}

    app.use(main);

    app.listen(3000, () => {
        console.log('Server is running at http://localhost:3000');
    });