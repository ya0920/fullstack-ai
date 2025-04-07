function Foo() {
  this.a = 1
  return [1, 2, 3]
}

let foo = new Foo()

console.log(foo);
