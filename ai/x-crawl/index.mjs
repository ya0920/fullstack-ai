import { createCrawl, createCrawlOpenAI } from "x-crawl";
import dotenv from "dotenv";

dotenv.config();

//创建爬虫
const crawlAPP = createCrawl({
    maxRetry: 3, // 最大重试次数
    intervalTime: {
        min: 1000, // 最小间隔时间
        max: 3000, // 最大间隔时间
    },
})

// 创建openai爬虫
const crawlOpenAI = createCrawlOpenAI({
    clientOptions: {
        apiKey: process.env.OPENAI_API_KEY,
        apiBaseUrl: process.env.OPENAI_API_BASE_URL,
    },
    defaultModel: { chatModel: "qwen-plus" },
})

// 开始爬虫
crawlAPP.crawlPage('https://movie.douban.com/chart').then(async res => {
    //console.log(res)
    const { page, browser } = res.data;
    // 获取页面内容
    const targetSelector = '.article'
    await page.waitForSelector(targetSelector)
    const highlyHTML = await page.$eval(targetSelector, (el) => el.innerHTML)
    // console.log(highlyHTML)

    // 让 ai 解析出我们要的数据
    const result = await crawlOpenAI.parseElements(
        highlyHTML,
        `获取电影评分，将评分不小于 8.0 的电影的图片链接、电影名称、电影的上映时间、电影评分获取到。
        输出格式为 JSON 数组。如：
        [
            {
                "image": "https://img.doubanio.com/view/photo/s_ratio_poster/public/p2561716928.jpg",
                "title": "肖申克的救赎",
                "time": "1994-09-10",
                "score": "9.7"
                }
        ]`
    )
    // 关闭浏览器
    browser.close()
    console.log(result)
})


