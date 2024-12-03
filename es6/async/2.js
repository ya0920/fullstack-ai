//asayc await 是 promise.then 的语法糖
function a() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
        console.log('a');
        resolve();
        }, 1000)
        
    })
}

function b() {
    console.log('b')
}

//async 相当于 return 了一个 new Promise()
async function fn() {
    await a();
    b();
}

fn()
