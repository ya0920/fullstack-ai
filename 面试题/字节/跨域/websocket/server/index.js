const WebSocket = require('ws');

// 在 3000 端口上建立 WebSocket 伺服器 （随时都在线的服务）
const ws = new WebSocket.Server({ port: 3000 });

let count = 0

ws.on('connection', (obj) => {
  // console.log(obj);
  obj.on('message', (msg) => {  // 收到客户端发来的消息
    // console.log(msg.toString());
    obj.send('收到了')

    setInterval(() => {
      count++
      obj.send(count)
    }, 2000)
    
  })
})