let obj = {
    a: 1,
    b: 2,
    c: {
        d: 3
    }
}

// Object.defineProperties(obj, 'a', {
//     writable: false,  // 不可写
//     configurable: false,  // 不可配置(删除)
//     emumerable: false,  // 不可枚举
// })

// obj.a = 2
// console.log(obj.a); // 1

// delete obj.a
// console.log(obj.a); // 1

// for (let key in obj) {
//     console.log(key); // b c
// }

// 冻结对象，不能修改它的可读取，可枚举，可配置性
let res = Object.freeze(obj)
console.log(res); // { a: 1, b: 2, c: { d: 3 } }
