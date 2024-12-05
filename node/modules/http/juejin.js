const https = require('https');
const fs = require('fs');
https.get('https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&aid=2608&uuid=7415860611224012326&spider=0', (res) => {

    let content = ''

    res.on('data', (data) => {
        //console.log(data);
        content += data  //字符串加buffer流=字符串
    })

    res.on('end', () => {
        //console.log(content);
        fs.writeFileSync('./juejin.json', JSON.stringify(JSON.parse(content), null, 2))  //将json字符串转为json对象并写入json文件
    });

})