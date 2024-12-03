function getData() {
    return 1
}
async function getAsyncData() {
    return 1
}

//翻译一下，状态成功，执行 .then ，状态pending
function getAsyncData() {
    return Promise.resolve().then(() =>{
        return 1
    })
}


async function getPromise() {
    return new Promise(function (resolve, reject) {
        resolve(1)
    })
}

//======================================
//在 JavaScript 中，如果一个 Promise 的 then 方法中的回调函数返回了一个非 Promise 值（如普通的数字、字符串、对象等），JavaScript 会自动将这个值包装成一个新的、已经 fulfilled 状态的 Promise。
function getData() {
    return 1
  }
  function getAsyncData() {
    return Promise.resolve().then(() => {
      return 1
    })
  }
  
  function getPromise() {
    return Promise.resolve().then(() => {
      return new Promise(function (resolve, reject) {
        resolve(1)
      })
    })
  }
  
  function test () {
    return Promise.resolve()
    .then(() => {
      let a = 2
      let c = 1
      return getData()
    })
    .then(() => {
      let d = 3
      return getPromise()
    })
    .then(() => {
      let e = 4
      return getAsyncData()
    })
    .then(() => {
      return 2
    })
  
    // let a = 2
    // let c = 1
    // await getData()
    // let d = 3
    // await getPromise()
    // let e = 4
    // await getAsyncData()
    // return 2
  }