const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('mime');
const checksum = require('checksum'); // 计算文件的MD5值

const server = http.createServer((req, res) => {
  let filePath = path.resolve(__dirname, path.join('www', req.url))

  if (fs.existsSync(filePath)) { // 判断文件是否存在
    const stats = fs.statSync(filePath); // 获取文件信息
    const isDir = stats.isDirectory() // 判断是否为文件夹
    if (isDir) {
      filePath = path.join(filePath, 'index.html') // 如果是文件夹，默认返回index.html
    }
    if (!isDir || fs.existsSync(filePath)) { // 向前端返回文件
      const { ext } = path.parse(filePath);
      const ifNoneMatch = req.headers['if-none-match']

      checksum.file(filePath, (err, sum) => {
        sum = `"${sum}"`

        if (ifNoneMatch === sum) {  // 文件没有变化

          res.writeHead(304, {
            'Content-Type': mime.getType(ext),
            'etag': sum,
          })
          res.end()

        } else {

          res.writeHead(200, {
            'Content-Type': mime.getType(ext),
            'Cache-Control': 'max-age=1000000',
            'etag': sum,
          })
          const resStream =  fs.createReadStream(filePath)
          resStream.pipe(res)

        }

        

      })


      



    }
    
  }
  
})

server.listen(3000);