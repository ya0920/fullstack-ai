const Router = require('koa-router');
const router = new Router();
const { userLogin } = require('../controllers/index.js');
const { sign } = require('../utils/jwt.js');

router.prefix('/user');

// 登录接口
router.post('/login', async (ctx, next) => {
  const { phone_number, password, user_type } = ctx.request.body; // post请求的数据
  try {
    const res = await userLogin(phone_number, password, user_type);
    
    if (res.length) { // 账号密码正确
      if (res[0].user_type === user_type) {
        const data = {
          phone_number: res[0].phone_number,
          user_type: res[0].user_type,
          id: res[0].id,
          avatar: res[0].avatar
        };
        const token = sign({
          id: res[0].id,
          phone_number: res[0].phone_number
        });
        ctx.body = {
          code: 200,
          data: data,
          token: token,
          msg: '登录成功'
        };
      } else {
        ctx.body = {
          code: 500,
          msg: '账号类型错误'
        };
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '账号或密码错误'
      };
    }
  } catch (error) {
    ctx.body = {
      code: 500,
      data: error,
      msg: '服务器异常'
    };
  }
});

// 注册接口
router.post('/register', async (ctx, next) => {
  const { user_id, username, password, phone_number, user_type } = ctx.request.body; // post请求的数据
  const created_at = new Date().toISOString().slice(0, 19).replace('T', ' '); // 获取当前时间
  try {
      const res = await userRegister(user_id, username, password, phone_number, user_type, created_at);
      if (res.affectedRows === 1) { // 插入成功
          const token = sign({
              id: user_id,
              phone_number: phone_number
          });
          ctx.body = {
              code: 200,
              msg: '注册成功',
              token: token
          };
      } else {
          ctx.body = {
              code: 500,
              msg: '注册失败'
          };
      }
  } catch (error) {
      ctx.body = {
          code: 500,
          data: error,
          msg: '服务器异常'
      };
  }
});

module.exports = {
  userRouter: router
};