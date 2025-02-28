var a
var b = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2)
  }, 1000)
})
a = new Promise(async (resolve) => {
  console.log(a)
  await b  // 卡了 1s  主线程让出来了
  console.log(a)
  await a
  resolve(true)
  console.log(6);
})