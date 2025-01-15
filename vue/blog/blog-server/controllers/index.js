// 导入模块
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
      const conn = await pool.getConnection();  // 等待连接池连接
      const [rows, fields] = await conn.query(sql, values); // 执行sql语句
      pool.releaseConnection(conn); // 释放连接
      return Promise.resolve(rows);

    } catch (error) {
      return Promise.reject(error);
    }

  }
}

// 获取最新文章列表
const getNewsArticleList = () => {
  let _sql = `SELECT * FROM article ORDER BY create_time DESC LIMIT 4;`
  return allServices.query(_sql)
}


// 获取文章分类
const getAllArticleCategory = () => {
  let _sql = `
    SELECT
      t.id,
      t.name,
      COUNT(at.article_id) AS article_count
    FROM 
      tags t
    LEFT JOIN 
      article_tags at ON t.id = at.tag_id
    GROUP BY
      t.id,
      t.name
    ORDER BY 
      article_count DESC;
  `
  return allServices.query(_sql)
}

module.exports = {
  getNewsArticleList,
  getAllArticleCategory
}