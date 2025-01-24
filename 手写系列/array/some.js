let arr = [1, 2, 3, 4, 5, 6]

Array.prototype.my_some = function (x) {
  for (let i = 0; i < this.length; i++) {
    if (x(this[i], i, this)) {
      return true
    }
  }
  return false
}

const res = arr.my_some((item, index, arr) => {
  return item > 6
})

console.log(res);