//! 姓名、年龄、工资、部门
const sqlite3 = require('sqlite3')

const connextion = new sqlite3.Database('./mydatabase.db', (err) => {
    if (err) {
        console.log('连接失败')
        return
    } 
    console.log('连接成功')
    //*创建表格
    connextion.run('CREATE TABLE IF NOT EXISTS employees (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, age INTEGER NOT NULL, salary REAL NOT NULL, department TEXT NOT NULL)')
})
