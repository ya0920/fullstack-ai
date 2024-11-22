// let a = 1
// let b = a
// a = 2
// console.log(b);


// let a = {name: '卢卡',age: 20}
// let b = a
// console.log(b.age);


let a = {name: '卢卡',age: 20} //对象
let b = a
a.age = 21      //共用一个引用地址
console.log(b.age);

//因为是引用类型，所以a和b指向同一个对象，所以修改a.age，b.age也会变

//为什么栈不能分配的大一点？
//闭包如果很多，（函数之间的调用关系会很多）作用域链会很长，那么执行上下文会很多，执行效率大大降低