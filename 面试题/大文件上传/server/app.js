
const http = require('http');
const multiparty = require('multiparty');
const path = require('path');
const fs = require('fs-extra');

const UPLOAD_DIR = path.resolve(__dirname, 'qiepian')


//! 异步代码：node 会分成很多段来接收数据，所以需要将数据拼接起来
const resolvePost = req => {  // 处理 post 数据: get 的参数直接 req.url 获取，post 的参数需要解析
  return new Promise(resolve => {
    let chunk = ''
    req.on('data', data => {  // data 事件，获取请求体数据
      chunk += data
    })
    req.on('end', () => {   // 自动触发，获取完数据后触发
      resolve(JSON.parse(chunk))  // 将字符串转为对象
    })
  })
}

//! 合并切片
const mergeFileChunk = async (filePath, fileName, size) => {
  const chunkDir = path.resolve(`${UPLOAD_DIR}/${fileName}-chunks`)
  let chunkPaths = fs.readdirSync(chunkDir)
  console.log(chunkPaths);
  chunkPaths.sort((a, b) => a.split('-').pop() - b.split('-').pop())

  const arr = chunkPaths.map((chunkPath, index) => {
    return popeStream(
      path.resolve(chunkDir, chunkPath),
      fs.createWriteStream(filePath, {
        start: index * size,
        end: (index + 1) * size
      })
    )
  })

  await Promise.all(arr)
}

// 读取文件流
const popeStream = (path, writeStream) => {
  return new Promise((resolve) => {
    const readStream = fs.createReadStream(path) // 读取该文件流
    readStream.on('end', () => {
      fs.unlinkSync(path)  // 删除该文件
      resolve()
    })
    readStream.pipe(writeStream) // 将读取的文件流写入到指定的文件流中
  })
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === '/upload') {
    const form = new multiparty.Form();
    form.parse(req, async (err, fields, files) => {
      // console.log(fields, files);
      if (err) {
        console.log(err)
        return
      }

      const [file] = files.file
      const [fileName] = fields.fileName
      const [chunkName] = fields.chunkName
      // 保存片段
      const chunkDir = path.resolve(UPLOAD_DIR, `${fileName}-chunks`)
      console.log(chunkDir);

      // 判断文件夹是否存在
      if (!fs.existsSync(chunkDir)) {
        await fs.mkdirs(chunkDir)
      }
      fs.move(file.path, `${chunkDir}/${chunkName}`)

      res.end('切片上传成功')
    })
  }

  if (req.url === '/merge') {  // 切片发送完成，合并某一文件切片
    const data = await resolvePost(req)
    // console.log(data);
    const { fileName, size } = data

    const filePath = path.resolve(UPLOAD_DIR, fileName)

    // 将 path 路径对应的文件夹下的所有文件合并
    await mergeFileChunk(filePath, fileName, size)
    res.end('合并成功')
  }
})



server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
