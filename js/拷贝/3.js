let obj = {
    a: 1
}

let obj2 = {
    b: 2
}

//===================
// let obj3 = Object.assign(obj, obj2) //合并多个对象，把obj2的属性合并到obj中，并返回obj

// console.log(obj3)
// console.log(obj);

//=====================
let obj4 = Object.assign({}, obj)  //浅拷贝
console.log(obj4)

//====================
obj.a = 2
console.log(obj4.a)  //1  

//======================
let obj = {
    a: 1,
    b: {
        n: 2
    }
}
obj.b.n = 20
console.log(obj4.b.n)  //20
//调用栈，cc