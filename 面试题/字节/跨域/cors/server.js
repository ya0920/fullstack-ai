const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Access-Control-Allow-Origin': 'http://192.168.31.168:5500',  // 允许所有域名跨域
    'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',  // 允许的请求方式
    'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',  // 允许的请求头
  })

  res.end('hello world')
})

server.listen(3000)