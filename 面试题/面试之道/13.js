// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 1000);

// console.log(3);


let count = 0
function A() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      count = 100
      resolve('ok')  // 将promise的状态变为resolved
    }, 1000);
  })
}

function B() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      count = 200
      resolve()
    }, 500);
  })
}

function C() {
  console.log(count);
}

// 1. A()立即执行返回了一个promise对象，但是这个promise对象的状态是pending
// 2. 1000ms 后，A返回的promise对象的状态变为resolved
// 3. 调用then方法，将B函数作为回调函数
A()
.then((res) => {  // then 天生返回一个promise对象,状态为 pending，并会继承 A 的状态
  return B()  // 用自己的 return 覆盖掉上then 默认返回的promise对象
})
.then(() => {
  C()
})