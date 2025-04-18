const http = require('http');
const fs = require('fs');

const server = http.createServer(async(req, res) => {
  const ifModifiedSince = req.headers['if-modified-since'];
  const desc = fs.statSync('./5.js');
  
  if (ifModifiedSince && ifModifiedSince == desc.mtimeMs) {
    res.writeHead(304, {
      'Content-Type': 'javascript',
      "Etag": "xxxxxxx"   // 读取文件内容加密一个 hash 字符串
      // "last-modified": desc.mtimeMs
    });
  } else {
    res.writeHead(200, {
      'Content-Type': 'javascript',
      "last-modified": desc.mtimeMs,
      "cache-control": maxAge = 600,
    });
  }
  const content = await fs.promises.readFile('./5.js', 'utf-8');
  res.end(content);
})

server.listen(3000, () => {
  console.log('Server is running on port 3000');
})