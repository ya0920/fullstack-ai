let obj = {
    name: '钟总',
    age: 18,
    like: {
      n: '金铲铲'
    },
    a: true,
    b: null,
    c: undefined,
    d: Infinity,
    e: -Infinity,
    f: NaN,
    g: Symbol(1),
    //h: 123n,   es7增加的，不能转
    i: function() {}
}

//================================
let str = JSON.stringify(obj) //JSON是一种格式，一个独特的对象
let res = JSON.parse(str) //字符串变成对象，
console.log(res)
console.log(str)

obj.age = 19
obj.like.n = 'xxx'
console.log(res);

//==================================
obj.c = obj.like
obj.like.n = obj.c
//循环引用合法
let str2 = JSON.stringify(obj) //JSON是一种格式，一个独特的对象
let res2 = JSON.parse(str) //字符串变成对象，
console.log(res)
console.log(str)

//报错了，因为JSON.stringify()方法不能处理循环引用的对象。