class Parent {
  constructor(name, age) {  // 构造函数
    this.name = name
    this.age = age
  }
  say() {
    console.log('hello');
  }
}


class Child extends Parent {
  constructor(name, age) {
    super(name, age)
    this.sex = 'boy'
  }
}

const c = new Child('张三', 18)
c.say()
