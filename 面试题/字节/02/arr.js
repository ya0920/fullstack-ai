let arr = [1, 2, [3, 4, [5,{a: 1}]]]

// const newArr = arr.flat(Infinity)

// const newArr = arr.toString().split(',').map(item => +item)  // 只有数字

// // 正则
// const newArr = arr.toString().match(/\d+/g).map(item => +item)




console.log(newArr)  // [1, 2, 3, 4, 5];
