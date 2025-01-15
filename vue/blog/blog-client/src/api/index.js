import axios from './axios.js'

// 获取最新文章
export const getNewsArticlesList = async() => {
    return await axios.get('/article/getNewsArticleList')
}

// 获取文章分类
export const getAllArticleCategory = async() => {
    return await axios.get('/article/getAllArticleCategory')
}