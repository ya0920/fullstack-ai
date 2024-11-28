
let arr = ['a', 'b', 'c', 'd']

//尾部
arr.push('e')

//头部增加
arr.unshift('f')

//移除最后一个，返回删除的元素
arr.pop()

//移除第一个，返回删除的元素
arr.shift()

//删除指定位置的元素，下标和个数，改变原数组
arr.splice(1, 1)

//切除某个范围的元素，不改变原数组，左闭右开，下标
arr.slice(1, 3)


//在下标出插入
arr.splice(2, 0, 'g')

console.log(arr)


//创建长度为7的数组，并填充上 0 
let arr2 = new Array(7).fill(0)

console.log(arr2)

