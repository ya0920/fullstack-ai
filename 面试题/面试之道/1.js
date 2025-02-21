// 数组去重（仅原始类型）
let arr = [1, 2, 3, 4, 5, 9, 9, 5];
let set = new Set(arr); // 不允许重复的值，新的对象
console.log([...set]); // Set { 1, 2, 3, 4, 9, 12, 5 }

// 引用类型不行
let arr2 = [
    { name: 'zhangsan', age: 18 },
    { name: 'lisi', age: 20 },
    { name: 'zhangsan', age: 18 },
    { name: 'wangwu', age: 22 }
]
let set2 = new Set(arr2);
console.log([...set2]); // Set { { name: 'zhangsan', age: 18 }, { name: 'lisi', age: 20 }, { name: 'wangwu', age: 22 } }


// 对象的 key 只能是字符串
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

let h = 'hello'

obj.h = 123

obj[h] = 1234

// Map 的 key 可以是任意类型
let m = new Map()
m.set('a', 1)
m.set(2, 2)
console.log(m); // Map { 'a' => 1, 2 => 2 }


// 正则表达式
let reg = new RegExp('xyz', 'i')
console.log(reg); //   /xyz/i
console.log(reg.test('xyfz')); // 查找字符串中是否有 xyz，忽略大小写

// 字面量 包装类
let a = 1 // new Number(1)
a, b = 2   // new Number(1).b = 2
//delete new Number(1).b
console.log(a.toString()); // 1


// 
const obj2 = {
    age: 20,
    like: {
        n: 'food'
    }
}

function test(o) {
    o.age = 30
    o = {          // 重新赋值, 会创建一个新的对象，引用地址变更
        age: 40,
        like: {
            n: 'drink'
        }
    }
    return o
}
const obj3 = test(obj2)
console.log(obj2); // { age: 30, like: { n: 'food' } }
console.log(obj3); // { age: 40, like: { n: 'drink' } }


