// 创建 scoket 服务器
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

// 监听连接事件
wss.on('connection', function connection(ws) {
  console.log('连接成功');  
  // 监听消息事件
  ws.on('message', function incoming(message) {
    console.log('收到客户端消息：', message);
    // 给客户端发送消息
    ws.send('你好，客户端');
    let count = 0;
    setInterval(() => {
      count++
      ws.send('你好，客户端  setInterval' + count);
    }, 3000)
  })
})