console.log('script start');
async function async1() {
  await async2() // 
  console.log('async1 end');  // 去到了微任务队列
}
async function async2() {
  console.log('async2 end');
}
async1()
setTimeout(() => {
  console.log('setTimeout');
}, 0)
new Promise((resolve, reject) => {
  console.log('promise');
  resolve()
})
.then(() => {
  console.log('then1');
})
.then(() => {
  console.log('then2');
});
console.log('script end');


// script start
// async2 end  x

// promise
// script end

// async1 end  x

// then1
// then2
// setTimeout