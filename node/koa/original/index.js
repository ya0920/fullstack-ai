const http = require('http');

http.createServer((req, res) => {     //* req:请求体，res:响应体
//   res.end('后端返回数据 Hello World!');    // 响应体返回Hello World!
  if (req.url === '/home') {
    // 做数据库的连接
    // 执行 sql 语句
    res.end('首页的数据');
  }

}).listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
