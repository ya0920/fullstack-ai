const https = require('https');//node自带的请求模块
const cheerio = require('cheerio');//用来解析html
const fs = require('fs');
//请求豆瓣 top250的页面

https.get('https://movie.douban.com/top250',(res) => {
    
    let html = ''

    res.on('data',(chunk) =>{      //拿到响应体了吗
        html += chunk              //拼接数据
    })
    res.on('end',() =>{            //当数据彻底拿完
        //开始解析
        const $ = cheerio.load(html)

        const allData = []
        $('.grid_view .item').each(function (){
            const title = $('.title', this).first().text()
            const star = $('.rating_num', this).text()
            const pic = $('.pic a img', this).attr('src')
            
            allData.push({ title, star, pic})
        })

    

        fs.writeFile('./file.json', JSON.stringify(allData), () => {
        console.log('文件保存成功');
        })
    })
})
