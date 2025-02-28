// // // let [a, b] = [1, 2]
// // // let {c, d} = {c: 3, d: 4}

// // // let [a, b] = {a:1, b:2}



// // // const arr = [1, 2, 3]
// // // const iterator = arr[Symbol.iterator]()
// // // console.log(iterator.next());
// // // console.log(iterator.next());
// // // console.log(iterator.next());
// // // console.log(iterator.next());


// // function createIterator(array) {
// //   let index = 0
// //   return {
// //     next: function() {
// //       if (index < array.length) {
// //         return {value: array[index++], done: false}
// //       } else {
// //         return {value: undefined, done: true}
// //       }
// //     }
// //   }
// // }

// // const myIterator = createIterator([1, 2, 3])
// // console.log(myIterator.next());// {value: 1, done: false}
// // console.log(myIterator.next());// {value: 2, done: false}
// // console.log(myIterator.next());// {value: 3, done: false}
// // console.log(myIterator.next());// {value: undefined, done: true}



// // [Symbol.iterator]
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   [Symbol.iterator]: function() {
//     let index = 0
//     return {
//       next: function() {
//         if (index < Object.keys(obj).length) {
//           return {value: Object.keys(obj)[index++], done: false}
//         } else {
//           return {value: undefined, done: true}
//         }
//       }
//     }
//   }
// }



// for (const item of obj) {
//   console.log(item);
// }




Object.prototype[Symbol.iterator] = function () {
  return Object.values(this)[Symbol.iterator]()
}

let [a, b] = { a: 1, b: 2 }
console.log(a, b);