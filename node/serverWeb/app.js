const express = require('express')
const app = express()

const cors = require('cors');
app.use(cors());


app.get('/index', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.get('/login', (req, res) => {
  const account = '18170028530'
  const password = '123456'

  if (req.query.username === account && req.query.psd === password) {
    res.send('登录成功')
  } else {
    res.send('账号或密码错误')
  }

})

app.listen(3000, () => {
  console.log('listening on port 3000');
})

