// // function foo(str, a) {
// //   eval(str) // var b = 3
// //   console.log(a, b);
// // }
// // var b = 2
// // foo('var b = 3', 1)


// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// // obj.a = 2
// // obj.b = 3
// // obj.c = 4

// with(obj) {
//   a = 2
//   b = 3
//   c = 4
// }
// console.log(obj);



var o1 = {
  a: 1
}
var o2 = {
  b: 2
}
// var a = 2
function foo(obj) {
  with(obj) {
    a = 2
  }
}
foo(o2)
console.log(o2);
console.log(a);

