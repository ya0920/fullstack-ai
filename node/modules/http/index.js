const http = require('http');

//创建HTTP Server
const server = http.createServer((req, res) => {
    res.end('Hello, World!');
})

//监听端口
server.listen(3000,() => {
    console.log('Server is running at http://localhost:3000')
})