//有没有一个方法，既能判断原始类型又能判断引用类型
let a = 1   //new Number(1)
//a.toString() = function(){}
let b = {} 
console.log(Object.prototype.toString.call(a));
//把 obj 原型上的 toString 的方法指到 a 身上来


//回顾一下call
function test(){
    console.log(this.a);
}
let obj = {
    a:1
}
test.call(obj)

//1. 让 obj 拥有 test
//2. obj.test()
//3. delete obj.test

//call可以把test借给obj用