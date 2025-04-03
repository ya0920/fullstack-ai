 
 
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

// for 循环的执行，i=5 跳出循环
// 定时器是异步


// 5 5 5 5 5


// 0 1 2 3 4

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

for (let i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 1000);
    })(i)
    // 自执行函数
}

for (var i = 0; i < 5; i++) {
    setTimeout(function (i) {
        console.log(i);
    }, 1000,i);
}