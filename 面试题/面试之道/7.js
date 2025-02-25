// // let a = {
// //   name: '熊总',
// //   like: ['吃饭', '睡觉', '打豆豆'],
// // }
// // // let b = {
// // //   age: 18
// // // }

// // const c = Object.assign({}, a)
// // a.like[0] = '熊熊'

// // console.log(c)


// // let a1 = [1, 2]
// // let a2 = [3, 4]

// // let a3 = a1.concat(a2)



// // let a1 = [1, 2, {n: 3}]
// // let a4 = [].concat(a1)
// // a1[2].n = 300
// // console.log(a4)

// Object.prototype.c = 3
// let obj = {
//   a: 1,
//   b:{n: 2}
// }

// // function shallowClone(obj) {
// //   let newObj = {}
// //   for (let key in obj) {
// //     if (obj.hasOwnProperty(key)) { // key属性是对象显示拥有的
// //       newObj[key] = obj[key] // 对于属性 b 来说，拷贝的是内存地址
// //     } 
// //   }
// //   return newObj
// // }

// function deepClone(obj) {
//   let newObj = {}
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) { // key属性是对象显示拥有的
//       if (typeof obj[key] === 'object' && obj[key] !== null) { // obj[key] 是对象
//         newObj[key] = deepClone(obj[key])
//       } else {
//         newObj[key] = obj[key]
//       }
//     } 
//   }
//   return newObj
// }

// const res = deepClone(obj)
// obj.b.n = 200
// console.log(res)




// let obj = {
//   a: 1,
//   b:{n: 2}
// }
// const res = structuredClone(obj)
// obj.b.n = 200
// console.log(res)



let obj = {
    a: 1,
    b:{n: 2}
  }
  function deepClone(obj) {
    return new Promise((resolve, reject) => {
      const { port1, port2 } = new MessageChannel()
      port1.postMessage(obj)
      port2.onmessage = (ev) => {
        resolve(ev.data)
      }
    })
  }
  
  deepClone(obj).then(res => {
    obj.b.n = 200
    console.log(res)
  })