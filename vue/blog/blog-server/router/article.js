// 定义跟文章相关的接口
const Router = require('koa-router')
const router = new Router()
const { getNewsArticleList } = require('../controllers/index.js')
// 路由前缀
router.prefix('/article')

// 获取最新文章列表
router.get('/getNewsArticleList', async (ctx, next) => { // 浏览器只能发get请求
    try {
        const res = await getNewsArticleList()
        console.log(res);

        if (res.length) {//有数据
            ctx.body = {
                code: 200,
                data: res,
                msg: '获取最新文章列表成功'
            }
        } else {
            ctx.body = {
                code: 200,
                data: [],
                msg: '暂无数据'
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
    articleRouter: router
}