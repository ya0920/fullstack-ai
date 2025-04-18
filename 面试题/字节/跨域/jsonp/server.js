const http = require('http');

http.createServer((req, res) => {
  const query = new URL(req.url, `http://${req.headers.host}`).searchParams
  // console.log(query.get('cb'));
  
  if (query.get('cb')) {
    const cb = query.get('cb')  // 'callback'
    const data = 'hello world'
    const result = `${cb}("${data}")`   // "callback('hello world')"
    res.end(result)
  }

  // res.end('hello world')

}).listen(3000);