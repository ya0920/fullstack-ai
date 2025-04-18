async function async1() {
  console.log('async1 start');  // 2
  // await async2();
  // console.log('async1 end');  // 必须等async2执行完才会被放入微任务队列中
  async2().then((res) => { // 微任务 1 
    res.then(() => {
      console.log('async1 end');  // 微任务 4    7
    })
  })
 
}
async function async2() {
  console.log('async2 start');  // 3
  return new Promise((resolve, reject) => {
    resolve();
    console.log('async2 promise');  // 4
  })
}
console.log('script start');   // 1
setTimeout(function() {
  console.log('setTimeout');  // 10
}, 0)   // 宏任务 1
async1();
new Promise(function(resolve) {
  console.log('promise1');  // 5
  resolve();
}).then(function() {  // 微任务 2     8
  console.log('promise2');
}).then(function() {  // 微任务 3     9
  console.log('promise3');
})
console.log('script end');  // 6

