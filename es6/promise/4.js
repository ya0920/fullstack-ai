function a() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('a');
            // resolve('a 执行完毕');
            reject('a 执行失败');
        }, 1000);
    });
}

function b() {
    console.log('b');
    
}

//.then放在了Promise的原型上
a()
.then(res =>{          //开关开了，里面的才会执行
    console.log(res);
})

.catch(err =>{       //捕获错误
    console.log(err);
})