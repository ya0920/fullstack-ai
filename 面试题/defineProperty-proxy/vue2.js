let oldArrayPrototype = Array.prototype
let proto = Object.create(oldArrayPrototype) // 浅拷贝

Array.from(['push', 'shift', 'unshift']).forEach(method => {
    proto[method] = function () {
        oldArrayPrototype[method].call(this, ...arguments)
        updataView()
    }
})


function observer(target) {
    if (typeof target !== 'object' || target === null) {
        return
    }
    if (Array.isArray(target)) {
        target.__proto__ = proto
    }
    for (let key in target) {
        observer(target[key])
        defineReactive(target, key, target[key])
    }
}

function defineReactive(target, key, value) {
    Object.defineProperty(target, key, {
        get() {
            return value
        },
        set(newValue) {
            if (newValue !== value) {
                value = newValue
                updataView()
            }
        }
    })
}

function updataView() {
    console.log('视图更新');
}

let data = {
    name: '小红',
    age: {
        n: 18
    },
    like:['吃饭','睡觉','打豆豆']
}
observer(data)
data.age.n = 19

console.log(data.age.n); // 19

data.like.push('看电影')  // 数组身上的方法无法触发劫持函数中的set方法
// data.like[0] = '打游戏' // 用下标可以触发劫持函数中的set方法

console.log(data.like); // ['吃饭','睡觉','打豆豆','看电影']

data.sex = '男'
console.log(data);
