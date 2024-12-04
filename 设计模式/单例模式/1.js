//静态方法
class SingleDog {
    constructor() {
        this.count = 0
        this.obj = null
    }
    show() {
        console.log('这是一个单例模式');
    }
    static getInstance() {
        if (!SingleDog.instance) { // 保证只有一个实例
            SingleDog.instance = new SingleDog
        }
        return SingleDog.instance
    }
}

const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()

console.log(s1 === s2) // falsse 引用地址不一样