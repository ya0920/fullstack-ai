const http = require('http');
const mysql = require('mysql2');

const server = http.createServer((req, res) => {
    if (req.url === '/users') {
        //*连接数据库，并将数据库中的数据读取到返回给前端
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'demo',
            password: 'root'
        });

        //* 查询数据库
        connection.query(
            'SELECT * FROM users',
            function (err, results, fields) {
                console.log(results); // results contains rows returned by server
            }
        );
    }
    res.end('Hello, World!');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});