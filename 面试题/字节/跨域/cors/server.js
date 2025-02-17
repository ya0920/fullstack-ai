const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',   // 允许此域名访问
        'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',  // 允许自定义请求头
        'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE,OPTIONS',  // 允许的请求方法
    })

    res.end('hello cors');

})
server.listen(3000)