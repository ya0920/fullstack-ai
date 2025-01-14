class SingleDog {
    // 记录调用次数
    static count = 0;
    // 存储实例对象
    static obj = null;
    show() {
        console.log('这是一个单例模式');
    }
    static getInstance() {
        if (SingleDog.count > 0) {
            return SingleDog.obj;
        }
        SingleDog.count++;
        SingleDog.obj = new SingleDog();
        return SingleDog.obj;
    }
}

const s1 = SingleDog.getInstance();
const s2 = SingleDog.getInstance();
console.log(s1 === s2); 