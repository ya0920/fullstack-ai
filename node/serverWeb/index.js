const http = require('http');  // commonJS 规范

const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    res.end(JSON.stringify({data: 'home page data'}))
    
  } else if (req.url === '/user') {
    const data = {
      name: '管总',
      age: 18
    }
    res.end(JSON.stringify(data))
  }
  
  
})

server.listen(3000, () => {
  console.log('服务已启动在 3000 端口');
})