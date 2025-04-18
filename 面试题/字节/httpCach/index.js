const http = require('http');
const url = require('url');

const responseData = {
  id: 1,
  name: '张三',
  age: 18,
  sex: '男'
}

function toHTML(data) {
  return `
    <ul>
      <li><span>id:</span> <span>${data.id}</span></li>
      <li><span>昵称:</span> <span>${data.name}</span></li>
      <li><span>年龄:</span> <span>${data.age}</span></li>
      <li><span>性别:</span> <span>${data.sex}</span></li>
    </ul>
  `
}


const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url)
  if (pathname === '/') {
    const accept = req.headers.accept // 前端想要的类型
    // console.log(accept);
    
    if (accept.includes('application/json')) {
      res.writeHead(200, {'content-type': 'application/json'})
      res.end(JSON.stringify(responseData))
    } else {
      res.writeHead(200, {'content-type': 'text/html; charset=utf-8'})
      res.end(toHTML(responseData))
    }
    
    // res.writeHead(200, {'content-type': 'text/html'})  // 告诉浏览器返回的内容的类型
    // res.end('<h1>Hello World</h1>')

  } else {
    res.writeHead(404, {'content-type': 'text/html'})
    res.end('<h1>Not Found</h1>')
  }

})

server.listen(3000, () => {
  console.log('server is running on port 3000');
})