//闭包
class SingleDog {
    constructor() {
        this.count = 0
        this.obj = null
    }
    show() {
        console.log('这是一个单例模式');
    }

}

SingleDog.getInstance = (function () {
    let instance = null
    return function () {
        if (!instance) {
            instance = new SingleDog()
        }
        return instance
    }
})()

const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()

console.log(s1 === s2) // falsse 引用地址不一样