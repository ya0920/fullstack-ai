const http = require('http');

http.createServer((req, res) => {
    const query = new URL(req.url, `http://${req.headers.host}`).searchParams;
    // console.log(query.get('callback'));

    if (query.get('callback')) {
        const cb = query.get('callback');
        const data = 'hello jsonp';
        const result = `${cb}('${data}')`; // callback('hello jsonp')
        res.end(result);
    }
    
    // res.end('hello jsonp');
}).listen(3000)