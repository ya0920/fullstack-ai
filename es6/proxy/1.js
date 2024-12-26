let obj = {
  a: 1
}
let value = obj.a


// console.log(obj.a);
// 当 obj.a 被修改值后，会再次打印
// obj.a = 2


// 数据劫持
Object.defineProperty(obj, 'a', {
  // value: 100,
  // writable: false,  // 可写
  // enumerable: false, // 可枚举
  // configurable: false, // 可配置
  get() {
    return value
  },
  set(val) {
    value = val
  }
})

// obj.a = 200
// console.log(obj.a);

// for (let key in obj) {
//   console.log(key);
// }

// delete obj.a
obj.a = 2
console.log(obj.a);
