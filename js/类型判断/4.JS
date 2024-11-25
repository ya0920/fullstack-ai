// console.log(new String('Hello') instanceof String);
// console.log('hello' instanceof String);

//所以，第一个是包装类，第二个是字面量（没有属性方法）

let num = 123    //let num = new Number(123)
num.a = 1          //真的往 num 上添加了key 为 a,值为 1
//读取值时会触发一个机制：原始类型不能拥有属性和方法，属性和方法只能是引用类型的
//不对！用户想要的是字面量，必须满足用户的要求------把实例对象Number(123)转变成字面量
//读取[[PermitiveValue]]    //两个中括号的属性，不是我们能用的，而是v8 引擎内部使用的。
//delete num.a
console.log(num.a); // undefined 为什么不会报错？

console.log(num); //[[PermitiveValue]]

let str = 'length'  // let str = new String('length')

console.log(str.length);//读的是包装类上的属性

str.len = 2
console.log(str.len);

let str2 = new String('length')//用户想要的是对象
str2.len = 2
console.log(str2.len);