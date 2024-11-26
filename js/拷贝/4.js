let arr = [1, 2, {n: 3}]
let arr2 = [3, 4]

//===================concat方法
let arr3 = arr.concat(arr2)

console.log(arr)        //不受影响
console.log(arr3);

//====================concat拷贝
let newArr = [].concat(arr)

console.log(newArr);

//====================浅拷贝
arr[0] = 10
console.log(newArr[0]); //1

arr[2].n = 30
console.log(newArr[2].n); //30

//===================另一个方法：解构赋值
let arr4 = [...arr]
arr[2].n = 50
console.log(arr4[4].n);

//==================切割方法
let arr5 = arr.slice()  //左闭右开，原数组不受影响
console.log(arr5);

//ps:splice() 方法会改变原数组，直接切出来