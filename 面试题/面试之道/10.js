Parent.prototype.say = function() {
  console.log('hello')
}
function Parent(age) {
  this.name = 'parent';
  this.age = age
}

Child.prototype = new Parent()  // {name: 'parent', age: 50}.__proto__ === Parent.prototype
function Child(name) {
  this.name = name
}

const c = new Child('child')   // c.__proto__ === Child.prototype
console.log(c.name);  // child
console.log(c.age);  // 50
c.say()  // hello

