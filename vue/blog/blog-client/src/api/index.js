import axios from './axios.js'

// 获取最新文章
export const getNewsArticlesList = async() => {
    return await axios.get('/article/getNewsArticleList')
}
