// 读取用户输入的内容
// 计算机生成一个随机的内容
// 比较结果并输出

//1111111
// const {game} = require('./lib.js')  //对象的解构

// const playerAction = process.argv[process.argv.length - 1];

// const result = game(playerAction)


//222222新规则
const {game} = require('./lib.js')  //对象的解构

let count = 0
process.stdin.on('data', function(a){
    const playerAction = a.toString().trim();
    const result = game(playerAction)

    if(result === 1){
        count++
    }
    if(count === 3) {
        console.log('恭喜你，有三局胜利')
        process.exit()
    }
    
})