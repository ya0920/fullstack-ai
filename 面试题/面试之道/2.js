// typeof
console.log(typeof 'hello'); // string
console.log(typeof 123); // number
console.log(typeof undefined); // undefined
console.log(typeof Symbol(1)); // symbol
console.log(typeof 111n); // bigint
console.log(typeof null); // object，唯独无法准确判断，object是通过二进制判断

//引用类型，几乎全是object，判断的不准确
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof new Date); // object
console.log(typeof function() {}); // function




// instanceof
console.log([] instanceof Object);
// object.prototype.__proto__ === null
// 手写类型判断
function myinstanceof(L, R) {
    while (L !== null) {
        L = L.__proto__
        if (L === R.prototype) {
            return true
        }
    }
    return false
}


// call 原理
Function.prototype.myCall = function(context) {
    context.fn = this
    context.fn()
    delete context.fn
}

let obj3 = {
    a: 1,
}

function fn() {
    console.log(this.a)
}

fn.myCall(obj3)   // 往 obj 上添加方法fn obj3 = {a: 1，fn: fn}  触发 obj3.fn() 

