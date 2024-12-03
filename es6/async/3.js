async function a() {
    setTimeout(function () {
    console.log('a');
    //Promise.resolve();  不能改变这个Promise的状态
    }, 1000)
}

function b() {
    console.log('b')
}

//await a(); 报错，await 只能出现在async函数中

async function fn() {
    await a();
    b();
}
fn()
// b a ：状态没有改变 ，所以不会执行