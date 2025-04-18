const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('mime');

const server = http.createServer((req, res) => {
  let filePath = path.resolve(__dirname, path.join('www', req.url))

  if (fs.existsSync(filePath)) { // 判断文件是否存在
    const stats = fs.statSync(filePath); // 获取文件信息
    const isDir = stats.isDirectory() // 判断是否为文件夹
    console.log(stats);
    

    if (isDir) {
      filePath = path.join(filePath, 'index.html') // 如果是文件夹，默认返回index.html
    }

    if (!isDir || fs.existsSync(filePath)) { // 向前端返回文件
      // const content = fs.readFileSync(filePath); // 读取文件内容
      // const { ext } = path.parse(filePath); // 获取文件后缀名
      // // console.log(ext);
      // // if (ext === '.png') {
      // //   res.writeHead(200, {'content-type': 'image/png'})
      // // } else {
      // //   res.writeHead(200, {'content-type': 'text/html; charset=utf-8'})
      // // }
      // res.writeHead(200, {'content-type': mime.getType(ext)})
      // return res.end(content);


      const { ext } = path.parse(filePath);
      const timeStamp = req.headers['if-modified-since']

      let status = 200
      if (timeStamp && Number(timeStamp) === stats.mtimeMs) { // 文件没有发生过更改
        status = 304
      }

      res.writeHead(status, {
        'content-type': mime.getType(ext),
        'cache-control': 'max-age=86400', // 强缓存 1 天
        'last-modified': stats.mtimeMs, // 最后修改时间
      })

      if (status === 200) {
        const readStream = fs.createReadStream(filePath); // 创建可读流
        readStream.pipe(res); // 将可读流的数据，通过管道，输出到前端
      } else {
        return res.end();
      }
    }
    
  }
  
})

server.listen(3000);