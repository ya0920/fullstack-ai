const mysql = require('mysql2/promise');
const dataBase = require('../config/index.js');

// 创建连接池
const pool = mysql.createPool({
    host: dataBase.HOST,
    user: dataBase.USERNAME,
    password: dataBase.PASSWORD,
    database: dataBase.DATABASE,
    port: dataBase.PORT
});

// mysql的连接
const allServices = {
    async query(sql, values) {
        try {
            const conn = await pool.getConnection(); // 等待连接池连接
            const [rows, fields] = await conn.query(sql, values); // 执行sql语句
            pool.releaseConnection(conn); // 释放连接
            return Promise.resolve(rows);
        } catch (error) {
            return Promise.reject(error);
        }
    }
};

// 用户登录
const userLogin = async (phone_number, password, user_type) => {
    const sql = 'SELECT * FROM users WHERE phone_number = ? AND password = ? AND user_type = ?';
    const values = [phone_number, password, user_type];
    return await allServices.query(sql, values);
};

// 用户注册
const userRegister = async (user_id, username, password, phone_number, user_type, created_at) => {
    const sql = 'INSERT INTO users (user_id, username, password, phone_number, user_type, created_at) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [user_id, username, password, phone_number, user_type, created_at];
    return await allServices.query(sql, values);
};

module.exports = {
    userLogin,
    userRegister
};