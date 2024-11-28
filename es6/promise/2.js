function a(cb, cc, cd) {
    setTimeout(() => {
        console.log('a 执行完毕'); 
        cb()
        cc()
        cd()
    }, 1000)
}

function b(cc, cd) {
    setTimeout(() => {
        console.log('b 执行完毕'); 
        cc()
        cd()
    }, 1500)
}

function c(cd) {
    setTimeout(() => {
        console.log('c 执行完毕'); 
        cd()
    }, 500)
}

function d() {
    console.log('d 执行完毕');
}


a(b, c, d)
