// 定义跟文章相关的接口
const Router = require('koa-router')
const router = new Router()
const {
    getNewsArticleList,
    getAllArticleCategory,
    getAllArticleList,
    getAllArticleCount,
    OneArticleTags,
    getArticleDetailById
} = require('../controllers/index.js')


// 路由前缀
router.prefix('/article')

// 获取最新文章列表
router.get('/getNewsArticleList', async (ctx, next) => { // 浏览器只能发get请求
    try {
        const res = await getNewsArticleList()

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

// 文章分类
router.get('/getAllArticleCategory', async (ctx, next) => {
    try {
        const res = await getAllArticleCategory()

        if (res.length) {//有数据
            ctx.body = {
                code: 200,
                data: res,
                msg: '获取文章分类成功'
            }
        } else {
            ctx.body = {
                code: 200,
                data: [],
                msg: '暂无数据'
            }
        }
    }
    catch (
    error) {
        ctx.body = {
            code: 500,
            data: error,
            msg: '服务器异常'
        }
    }
})

// 所有文章
router.get('/getAllArticleList', async (ctx, next) => {

    const { page, size } = ctx.query;
    try {
        const res = await getAllArticleList({ page, size })  // 获取文章列表
        const tital = await getAllArticleCount();  // 获取文章总数
        const tags = await OneArticleTags();  // 获取文章标签

        // console.log('tags:',tags);

        res.forEach(item => {  // 引用类型可以直接修改
            tags.forEach(tag => {
                if (item.id === tag.article_id) {
                    item.tag_names = tag.tag_names
                }
            })
        })

        // console.log('res:',res);


        if (res.length) {//有数据
            ctx.body = {
                code: 200,
                data: res,
                totalPage: Math.ceil(tital[0].count / Number(size)),
                msg: '获取全部文章成功'
            }
        } else {
            ctx.body = {
                code: 200,
                data: [],
                msg: '暂无数据'
            }
        }
    }
    catch (error) {
        ctx.body = {
            code: 500,
            data: error,
            msg: '服务器异常'
        }
    }
})

// 根据id获取文章详情
router.get('/getArticleDetailById', async (ctx, next) => {
    const { id } = ctx.query;
    try {
        const res = await getArticleDetailById(id)
        console.log('res:', res);
        if (res.length) {//有数据
            ctx.body = {
                code: 200,
                data: res[0],
                msg: '获取文章详情成功'
            }
        } else {
            ctx.body = {
                code: 200,
                data: [],
                msg: '文章不存在'
            }
        }
    }
    catch (error) {
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