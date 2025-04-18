const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173')
})

server.listen(3000, () => {
  console.log('Server is running on port 3000')
})