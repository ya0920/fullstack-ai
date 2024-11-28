//队列
const queue = []

//queue.push(1)
queue.push('佣兵')
queue.push('古董商')
queue.push('啦啦队员')
queue.push('囚徒')


//queue.shift()
console.log(queue)

//不能这样访问，这样就是数组了
//console.log(queue[1]);

//遍历
while(queue.length) {
    const top = queue.shift()
    console.log(`我爱玩：${top}`);
    
}

