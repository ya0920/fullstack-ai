Object.prototype.abc = function(element) {
  return 'abc'
}

let arr = [1, 2, 3]  // new Array()   arr.__proto__ = Array.prototype
let arr2 = []


console.log(arr2.abc());
// arr2.__proto__ = Array.prototype  // new Object()
// Array.prototype.__proto__ = Object.prototype










// Foo.prototype.b = 2
// function Foo(){
//   this.a = 1
//   return []
// }
// function myNew(F) {
//   const obj = {}
//   obj.__proto__ = F.prototype
//   const res = F.call(obj)
//   return res instanceof Object ? res : obj
// }

// const res = myNew(Foo)
// console.log(res);




// function Foo() {
//   this.a = 1
//   return null
// }

// const obj = new Foo()
// console.log(obj);
