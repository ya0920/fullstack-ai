let arr = [1, 2, 3, 4 , 5, 6]

Array.prototype.my_reduce = function(cb, ...args) {
  let start, index = 0;
  if (args.length) {
    start = args[0]
  } else {
    start = this[0]
    index = 1
  }
  
  for (let i = index; i < this.length; i++) {
    start = cb(start, this[i], i, this)
  }
  return start
}

// return 的值赋回给 pre, 当数组遍历结束，返回最终的 pre 的值
const res = arr.my_reduce((pre, item, index, arr) => {
  // console.log(pre, item, index, arr);
  return pre + item
}, 0)

console.log(res);
