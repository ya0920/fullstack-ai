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