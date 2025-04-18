const http = require('http');
const fs = require('fs');
const { createSSRApp } = require('vue');

// vue 的 ssr 服务
const server = http.createServer((req, res) => {
  fs.readFileSync('./src/views/Home.vue', 'utf-8', (err, data) => {
    // 把Home.vue 中的接口请求在服务端进行请求 const res = axios()
    // 编译成 html 字符串
    const html = `
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <div id="app">${data}</div>
      </body>
    </html>`;
    res.end(html);
  })
})

server.listen(3000, () => {
  console.log('Server is running on port 3000');
})



{/* <script src="htts://xxxxxxx.js"></script> */}