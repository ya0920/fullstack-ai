function foo(x, y) {
  console.log(this.a, x + y);
}

var obj = {
  a: 1
}

// foo.call(obj, 2, 3)  // Function.prototype.call = fun
// foo.apply(obj, [2, 3])
let bar = foo.bind(obj, 1)
bar(2, 3)




// obj.call()
// Function.prototype.__proto__ === Object.prototype {
//   // call
// }