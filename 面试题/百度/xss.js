const http = require('http');

const server = http.createServer((req, res) => {
  const content = req.query.content;  // "&lt;script src="https://xxxxxxx.js"&gt;&lt;/script&gt;"
  const changebox = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  }
  for (let s of content) {
    Object.keys(changebox).forEach((key) => {
      if (s === key) {
        content = content.replace(s, changebox[key]);
      }
    })
  }
})  

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})