let a = 1

console.log(a);

setTimeout(() => {           //时间器回调函数，模拟耗时的代码
    a = 2
}, 1000)

console.log(a);

