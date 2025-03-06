 # vue 中的响应式
 变量的变化会带来 dom 结构的更新

 # 响应式变量更新
 触发依赖

 寻找附作用函数


 # ref 
 - .value 为了性能考虑，value是一个函数

 # ref 和 reactive 的区别
 reactive 借助 proxy 代理引用类型，当读取get值的时候，会收集依赖，也就是那些副作用函数，当里面的值被修改 set的时候，会触发依赖；ref的参数是引用类型时借助 reactive 来实现响应式，当参数是原始类型时，借助原生js的 getter 和setter 机制来收集副作用函数和触发副作用函数