# 类型
 - 原始类型：number string boolean undefined null（es6之前）symbol bigint
 - 引用类型：object function array Date  (es6增加的) Map Set RegExp

1. toString()
2. 0.1 + 0.2 = 0.30000000000000004--精度丢失
3. 超过 js 的最大值2**53，无法计算
    4856315546156412 + 0000015546156412 补零，一个一个加

# typeof vs instanceof
Object.prototype.toString(x)

1. 对象上的 toString() 返回 '[object 变量类型]'格式的字符串
2. 数组上的 toString() 返回 数组元素以逗号拼接的字符串
3. 其他类型的 toString() 返回 字符串字面量

# 类型转换
- 显示转换   Number('1')
- 隐式转换   + - * / ==  !=  !  > < >= <=  if while 

1. 原始类型 -> 原始类型
2. 引用类型 -> 原始类型   

  1. 转字符串 :  X + ''
  2. 转数字
  3. 转布尔值: if while  !

- {} ==> 数字      ||     {} ==> 字符串    ToString({})
  1. ToNumber({})  // ToNumber只能处理原始类型
  2. 当ToNumber遇到引用类型内部执行 ToPrimitive({}， number)  

- ToPrimitive({}， number)  
 1. 先调用valueOf()  如果返回原始类型  则结束
 2. 调用toString()  如果返回原始类型  则结束
 3. 抛出错误

- ToPrimitive({}， string) 
 1. 先调用toString()  如果返回原始类型  则结束
 2. 调用valueOf()  如果返回原始类型  则结束
 3. 抛出错误

# this
 - 默认绑定：函数被独立调用 this 指向 window 
 - 隐式绑定：函数被某个对象调用，this 指向该对象
 - 隐式丢失：函数被一连串的对象调用，this 指向最近调用的对象
 - 显式绑定：call apply bind
   - 区别
      1. call bind 接收参数是零散的
      2. apply 接收参数是数组
      3. bind 返回的是一个新的函数，新函数也可以接收参数
         1. 当新的函数被调用时，返回的是 调用 bind 的那个函数的实例对象


# == vs ===
 1. == 会进行隐式转换
 2. === 不会进行隐式转换

# 闭包
根据词法作用的规则，内部函数总是可以访问其外部函数中的变量的。
在函数执行完毕后，它的执行上下文对象要被销毁

当函数 A 内部声明了一个函数 B，函数 B 被拿到 A 的外部调用，为了同时满足以上两个规则，函数 A 的执行执行上下文被销毁后会遗留下来一个对象空间，用于存放函数 B 有权访问的所有变量。这个对象空间被称为闭包。


# 拷贝
  - 浅拷贝：拷贝得到的新对象会受原对象的影响 
    - 1. Object.assign()
    - 2. Object.create()
    - 3. 展开运算符 ...
    - 4. 数组的 slice()  concat()

  - 深拷贝：拷贝得到的新对象不会受原对象的影响
   1. JSON.parse(JSON.stringify(obj))
   2. 递归拷贝
   3. structuredClone()
   4. new MessageChannel()