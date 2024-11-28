function pw() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('排位上分了');
            resolve('太有鸡蛋了')  //开关，over
        }, 2000)
    })
    
}

function lp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('打完啦');
            resolve()  //开关，over
        }, 2000)
    })
}

function sf() {
    console.log('今天上了三颗星');
}

//then的链式调用

pw()
.then((res) => {
    return lp()       //把又一个promise的实例对象给了.then
})
.then(() => {
    sf()
})



// pw().then((res) => {
//     console.log(res);
//     lp().then((res) => {
//         sf()
//     })
// })