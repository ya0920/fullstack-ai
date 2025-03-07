# Objct.defineProperty  vs  proxy
 1. Objct.defineProperty 无法劫持数组上的方法（所有vue2需要重写数组的方法），proxy 可以代理数组
 2. Objct.defineProperty 只能劫持对象拥有的属性，proxy 可以代理对象新增属性的操作
 3. 在 vue 中，Objct.defineProperty 是默认递归劫持，proxy 是按需递归代理（在 get 里进行判断，是对象就代理）
 4. Objct.defineProperty 可以冻结对象的属性，修改属性的可写，可配置，可枚举性