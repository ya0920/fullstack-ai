// 所有路由生效
const { articleRouter } = require('./article.js')

const useRouters = (app) => {
  app.use(
    articleRouter.routes(), // 路由中的回调会被触发
    articleRouter.allowedMethods()
  )
}

module.exports = useRouters