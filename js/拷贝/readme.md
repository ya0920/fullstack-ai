# 拷贝

---只针对引用类型
---基于原对象，拷贝得到一个新对象

1. 浅拷贝：新对象会受原对象的影响（只拷贝对象的第一层，而里面的子对象只拷贝了引用地址）
   js常见的99%的拷贝方法都是浅拷贝
   - Object.create(x)  //copy 出来的是一个空对象
   - Object.assign({}, x)
   - [].concat(x)
   - 数组解构
   - arr.toReversed().reverse()
   - 实现原理：遍历对象，将每个显式属性都拷贝一份

2. 深拷贝：新对象不受原对象的影响
- JSON.parse(JSON.stringify(obj))
   1. 不能识别 bigint
   2. 不能识别 symbol、function 、undefined(类型)、NaN、Infinity(值)
   3. 无法处理循环引用

- structuredClone()  兼容性不好
  