// console.log(Object.getOwnPropertyNames(global));

console.log(__filename); //global.__filename 绝对路径

console.log(__dirname); //js脚本所在目录

console.log(setTimeout);//全局存在

// console.log(requestAnimationFrame);//node里不存在

console.log(process.argv);
console.log(process.cwd()); //读取
console.log(process.env);//读取环境变量
console.log(process.version);//读取node版本


//
console.log('hello');
process.exit()  //终止进程
console.log('aaa');


//
process.stdout()//输出标准的流类型
process.stdout.write('hello')
process.stdout.write('')
process.stdout.write('world')
process.stdout.write('\n')


//监听进程
process.stdin.on('data',function(data){
    console.log(`用户输入：${data}`);
    //只要用户进行输入，data事件就会一直存在
})


//
const buf = Buffer.from("你好")//buffer流类型，node用十六进制
console.log(buf);

console.log(buf.toString('base64'));//浏览器输入中文会乱码，这里默认是'utf8'


