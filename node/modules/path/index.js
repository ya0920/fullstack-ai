const path = require('path');

console.log(path.join('a', 'b', 'c'))  //把字符串进行路径拼接,相对路径
console.log(path.join(process.cwd(), 'readme.md'))

console.log(path.resolve('a', 'b', 'c'));//拼接成绝对路径

