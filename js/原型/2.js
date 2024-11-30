// const obj = {
//   a: 1
// }

// const str = 'abcdef'

// console.log(str.startsWith('ab'));






// Person.prototype  --- 原型  也是一个对象

Person.prototype.say = 'Hello'
function Person() {
  this.name = 'John'
  this.age = 20
}
let p = new Person()

console.log(p.say);




let s = 'abc'   // new String('abc')
// s.xxxxx