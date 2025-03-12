function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aa');
      reject('a ok');
    }, 1000)
  })
}
function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bb');
      reject('b ok');
    }, 500)
  })
}
function c() {
  console.log('cc');
}

promiseAny([a(), 'hello', b()])
.then((res) => {
  console.log(res);
  c();
})
.catch((err) => {
  console.log(err);
})


function promiseAny(promises) {
  let errors = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      if (!(promises[i] instanceof Promise)) {
        resolve(promises[i])
        continue
      }
      promises[i].then(
        res => {
          resolve(res)
        },
        err => {
          errors[i] = err;
          count++;
          if (count === promises.length) {
            reject(new AggregateError(errors, 'All promises were rejected'))
          }
        }
      )
    }
  })
}