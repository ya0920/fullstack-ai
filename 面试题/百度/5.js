function getData() {
  const random = ~~(Math.random() * 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: 'John', age: 30 };
      if (random > 7) {
        resolve(data);
      } else {
        reject('Error');
      }
      
    }, 1000);
  })
}


function retry(fn, maxTimes = 3) {
  let times = 1;
  return new Promise((resolve, reject) => {
    const repeat = () => {
      fn()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.log('请求失败，正在重试...');
        
        if (times++ < maxTimes) {
          repeat();
        } else {
          reject(error);
        }
      })
    }
    repeat()
  })
  
}

retry(getData, 3).then((data) => {
  console.log(data);
})


// getData()
// .then((data) => {
//   console.log(data);
// })
// .catch((error) => {
//   console.log(error);
// })