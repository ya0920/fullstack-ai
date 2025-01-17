const Router = require('koa-router')
const router = new Router()
const { userLogin } = require('../controllers/index.js')
const { sign } = require('../utils/jwt.js')

router.prefix('/user')

// 登录
// 登录接口
router.post('/login', async (ctx, next) => {
    const { username, password } = ctx.request.body  // post请求的数据
    try {
      const res = await userLogin(username, password)
      if (res.length) {  // 账号密码正确
        const data = {
          username: res[0].username,
          nickname: res[0].nickname,
          id: res[0].id,
          avatar: res[0].avatar
        }
        const token = sign({
          id: res[0].id,
          username: res[0].username
        })
        ctx.body = {
          code: 200,
          data: data,
          token: token,
          msg: '登录成功'
        }
      } else {
        ctx.body = {
          code: 500,
          msg: '账号或密码错误'
        }
      }
    } catch (error) {
      ctx.body = {
        code: 500,
        data: error,
        msg: '服务器异常'
      }
    }
  })

module.exports = {
    userRouter: router
}