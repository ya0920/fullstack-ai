function getJson() {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log(2);
        resolve(2)
      }, 2000)
    })
  }
  
  async function testAsync() {
    await getJson()
    console.log(3);
  }
  testAsync()

  //将 async，await 翻译成 promise
  function testAsync() {
    return Promise.resolve().then(() => {
        return getJson()
    })
    .then(() => {
        console.log(3);
    })
  }

  