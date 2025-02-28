let arr = [1, 2, 3, 4, 5, 6]

// // const res = arr.map((item, index, arr) => {
// //   return item * 2
// // })

// // const res = arr.filter((item, index, arr) => {
// //   return item > 2
// // })

// // const res = arr.reduce((prev, cur, index, arr) => {
// //   return prev + cur
// // }, 0)

// try {
//   arr.forEach((item, index, arr) => {
//     if (item === 3) {
//       throw new Error('循环终止')
//     }
//     console.log(item);
//   })
// } catch (error) {
//   console.log('循环终止');
// }

// console.log('hello');


for (let item of arr) {
  if (item === 3) {
    break
  }
  console.log(item);
}


