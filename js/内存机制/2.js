let a = 1
a = 'hello'
a = true
a = null      //64个0，object
a = undefined
a = Symbol(1)
a = 123n      //原始类型
a = []
a = {}//引用类型
a = function () {}



console.log(typeof a);//typeof(a)判断数据类型
//通过判断二进制，000就是object