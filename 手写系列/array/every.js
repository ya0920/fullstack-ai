let arr = [1, 2, 3, 4, 5, 6]

Array.prototype.my_every = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this) === false) {
      return false
    }
  }
  return true
}



// 检验数组中所有的元素是否都满足条件
const res = arr.my_every((item, index, arr) => {
  return item > 0
})

console.log(res);
