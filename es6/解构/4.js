// function foo(...args) {
//   // console.log(arguments);  // 类数组
//   // console.log(args);

//   let res = 0
//   for (var i = 0; i < args.length; i++) {
//     res += arguments[i]
//   }
//   return res
// }

// foo(1, 2, 3, 4)



function foo([x, y]) {

}

foo([1, 2])