function foo() {
  console.log(this.a);
}

const obj = {
  a: 1,
  foo: foo
}

const obj2 = {
  a: 2,
  obj: obj
}

obj2.obj.foo()