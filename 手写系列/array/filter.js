let arr = [1, 2, 3, 4 , 5, 6]

Array.prototype.my_filter = function(cb) {
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    const res = cb(this[i], i, this)
    if (res) {
      newArr.push(this[i])
    }
  }
  return newArr
}

const res = arr.my_filter((item, index, arr) => {
  return item > 3
})

console.log(res);
