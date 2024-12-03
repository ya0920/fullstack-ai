//红绿灯问题
function red() {   // 每隔 3 秒
    console.log('红');
  }
  function green() {  // 每隔 1 秒
    console.log('绿');
  }
  function yellow() {  // 每隔 2 秒
    console.log('黄');
  }
  
  // setInterval(() => {
  //   red()
  // }, 3000)
  // setInterval(() => {
  //   green()
  // }, 1)
  // setInterval(() => {
  //   yellow()
  // }, 2000)
  
  let light = function(timer, cb) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        cb()
        resolve()
      }, timer)
    })
  }
  
let step = async function() {
    Promise.resolve()
    .then(() => {
      return light(3000, red)
    })
    .then(() => {
      return light(1000, green)
    })
    .then(() => {
      return light(2000, yellow)
    })
    .then(() => {
      step()
    })
}
  

// let step = async function() {
//     await light(3000, red)
//     await light(1000, green)
//     await light(2000, yellow)
//     step()
//   }

step()

