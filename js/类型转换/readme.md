# == vs ===
== 会发生隐式类型转换（引用转原始），所以只会判断值是否相等
=== 不会发生隐式类型转换，意味着会判断值和类型是否相等

# 原始类型之间的转换
1. 转布尔
2. 转数字
3. 转字符串

# 对象转原始类型
1. 转字符串 ToString(obj) || Object.prototype.toString(obj)

  ToString(a)  => ToPrimitive(a, ToString)

 - {}.toString 返回由'[object' 和 class 和 ']'组成的字符串
 - [].toString 返回由数值中以逗号拼接的字符串
 - xx.toString 直接返回 xx 的字符串字面量（Function，Date

1. 转数字： Number(obj)
   ToNumber({})  => ToPrimitive({}, Number)

3. 转布尔：ture


# ToPrimitive
1. ToPrimitive(obj, ToString)
 - 如果 obj 是原始类型，则直接返回 obj
 - 否则，调用 toString()，如果得到原始类型，则返回
 - 否则，调用 valueOf()，如果得到原始类型，则返回
 - 否则，报错

2. ToPrimitive(obj, Number)
 - 如果 obj 是原始类型，则直接返回 obj
 - 否则，调用 valueOf()，如果得到原始类型，则返回
 - 否则，调用 toString()，如果得到原始类型，则返回
 - 否则，报错

valueOf()转包装类

# 隐式类型转换的场景
1. 四则运算 + - * / %
2. 判断语句 if， while， ==， <， >， <=， >=， !=


# 一元运算符 +

# 二元运算符 +
 val1 + val2

 lprim = ToPrimitive(val1)
 rprim = ToPrimitive(val2)

 - 如果 lprim 或 rprim 是字符串，则拼接
-  否则，返回 ToNumber(lprim) 和 ToNumber(rprim) 相加的结果
-  


# ==

https://es5.github.io/#x11.9.3

类型相同 
1. 值相等，返回 true
2. undefined == undefined
3. null == null
4. NaN != NaN
5. 引用同一个对象，返回 true

类型不同
1. undefined == null
2. Number 和 String：Number 和 ToNumber(String)
3. Boolean 和 String：Boolean 和 ToNumber(String)
4. Boolean 和 Number：Number 和 ToNumber(Boolean)
5. {} 
