// function add() {
//     let num = 0;
//     console.log(++num);
// }
// add()  // 1
// add()  // 1

// //闭包的应用：累加器
// function add() {
//     let num = 0;
//     return function () {
//         console.log(++num);
//     }
// }
// const res = add()
// res()  // 1
// res()  // 2

//面试题
function fn() {
    var arr = []
    for (var i = 0; i < 5; i++) {
      arr.push(function() {
        console.log(i)
      })
    }
    return arr
  } 
  
  var funcs = fn()
  for (var j = 0; j < 5; j++) {
    funcs[j]()  //数组中的五个函数依次执行
  }
  // 5 5 5 5 5

  // 1 2 3 4 5 或者 var i改成let i
  function fn() {
    var arr = []
    for (var i = 0; i < 5; i++) {
        (function(n){                //自执行函数
            arr.push(function() {
                console.log(n)
            }) 
        })(i)
      
    }
    return arr
  } 
  
  var funcs = fn()
  for (var j = 0; j < 5; j++) {
    funcs[j]()  //数组中的五个函数依次执行
  }