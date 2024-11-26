// let obj = {
//     a: 1
// }
// let newObj = Object.create(obj);
// console.log(newObj.a); //隐式原型


let obj = {
    a: 1
}
let newObj = Object.create(obj); //不在原型上
newObj.a = 2;
console.log(newObj.a); //隐式原型

