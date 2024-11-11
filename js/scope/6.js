// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// // var i = 'hello'
// console.log(i);

// if (true) {
//   let a = 1
//   var b = 2
// }

// {
//   let a = 1
//   var b = 2
// }

// console.log(a);


// var foo = true, baz = 10
// if (foo) {
//   let bar = 3
//   if (baz > bar) {
//     console.log(baz);
//   }
// }


let a = 1

if (true) {
  console.log(a);  // 暂时性死区
  let a = 2
}