// function foo() {
//   let a = 1
//   window.bar = function () {
//     console.log(a)
//   }
// }
// foo()
// bar()


// for (var i = 0; i < 5; i++) {
//   function foo(j) {
//     setTimeout(() => {
//       console.log(j)
//     }, 1000)
//   }
//   foo(i)
// }


for (var i = 0; i < 5; i++) {
    // const hand = function (j, x, y) {
    //   console.log(j, x, y);
    // }
    // hand(1, 2, 3)
  
    setTimeout((x, y, z) => {
      console.log(x, y, z);
    }, 1000, i, 9, 8)  // hand(1)
  }
  
  
  // function setTimeout(fn, delay, i) {
  //   // 1000 后
  //   fn(i)
  // }
  // setTimeout(fn, 1000, 1)