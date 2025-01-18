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

// 获取所有文章
const getAllArticleList = ({ page, size }) => {
  let _sql = `SELECT *
              FROM article
              ORDER BY create_time DESC, id DESC
              LIMIT ${size} OFFSET ${(page - 1) * size};`;
  return allServices.query(_sql);
}

// 获取所有文章数量
const getAllArticleCount = () => {
  let _sql = `SELECT COUNT(*) AS count FROM article;`
  return allServices.query(_sql)
}

// 每篇文章的标签
const OneArticleTags = () => {
  let _sql = `SELECT 
                a.id AS article_id,
                GROUP_CONCAT(t.name SEPARATOR ', ') AS tag_names
              FROM 
                  article a
              LEFT JOIN 
                  article_tags at ON a.id = at.article_id
              LEFT JOIN 
                  tags t ON at.tag_id = t.id
              GROUP BY 
                  a.id;`
  return allServices.query(_sql)
}

//根据文章id获取文章详情
const getArticleDetailById = (id) => {
  let _sql = `SELECT * FROM article WHERE id=${id};`
  return allServices.query(_sql)
}

const userLogin = (username, password) => {
  let _sql = `SELECT * FROM users WHERE username='${username}' AND password='${password}';`
  return allServices.query(_sql)
}

const addLike = async (article_id, user_id) => {
  let _sql = `INSERT INTO article_users (user_id, article_id)
              SELECT ${user_id},${article_id}
              WHERE NOT EXISTS (
              SELECT 1 FROM article_users WHERE user_id=${user_id} AND article_id=${article_id}
);`
  let _sql2 = `UPDATE article
              SET like_num = like_num + (SELECT CASE WHEN ROW_COUNT() > 0 THEN 1 ELSE 0 END)
              WHERE id=${article_id};`

  // return await Promise.all([allServices.query(_sql), allServices.query(_sql2)])
  const res1 = await allServices.query(_sql)
  if (res1.affectedRows === 1) {
    return allServices.query(_sql2)
  }
  return Promise.resolve({ msg: '已经点赞过了' })

}

// 添加评论
const addComment = (article_id, comment, user_id) => {
  let _sql = `INSERT INTO comment (create_time, article_id, comment_val, user_id) VALUES ('${new Date().getTime()}',${article_id}, '${comment}', ${user_id});`
  return allServices.query(_sql)
}

// 获取评论
// 获取文章评论
const getCommentList = (id) => {
  let _sql = `
      SELECT 
        c.id AS comment_id,
        c.comment_val AS comment_content,
        c.create_time AS comment_created_at,
        u.id AS user_id,
        u.username AS user_username,
        u.nickname AS user_nickname,
        u.avatar AS user_avatar
    FROM 
        comment c
    JOIN 
        users u ON c.user_id = u.id
    WHERE 
        c.article_id = ${id}
    ORDER BY 
        c.create_time DESC;`

  return allServices.query(_sql)
}

module.exports = {
  getNewsArticleList,
  getAllArticleCategory,
  getAllArticleList,
  getAllArticleCount,
  OneArticleTags,
  getArticleDetailById,
  userLogin,
  addLike,
  addComment,
  getCommentList
}