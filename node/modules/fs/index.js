const fs = require('fs');

//1
fs.readFile('./temp.html', (err, data) =>{//node每个方法都打造两个版本(异步)
    if(!err) {
        console.log(data.toString());
    }    
}) 

//或者
fs.readFile('./temp.html', 'utf-8', (err, data) =>{//node每个方法都打造两个版本(异步)
    if(!err) {
        console.log(data);
    }    
}) 

//
let html = ''
fs.promises.readFile('./temp.html', 'utf-8').then((res) =>
    html = res
)
console.log(html);

//解决异步
//let html = ''
html = fs.readFileSync('./temp.html', 'utf-8')
console.log(html);
