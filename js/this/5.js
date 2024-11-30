function Person() {
  // let obj = {
  //   name: '阿炜',
  //   age: 18
  // }
  // Person.call(obj)
  // obj.__proto__ = Person.prototype
  // // 判断 Person() 的值如果是引用类型，则采用
  // return Person() instanceof Object ? Person() : obj

  this.name = '阿炜'
  this.age = 18
}

let p = new Person()

console.log(p);
