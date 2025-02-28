Parent.prototype.say = function() {
  console.log('hello')
}
function Parent(age) {
  this.name = 'parent';
  this.age = age
}


function Child(name, age) {
  Parent.call(this, age)
  this.name = name
}

const c = new Child('child', 50)  
console.log(c);


console.log(c.name);  // child
console.log(c.age);  // 50
// c.say()  // hello

