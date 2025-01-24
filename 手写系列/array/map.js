let arr = ['a', 'b', 'c', 'd', 'e'];

Array.prototype.my_map = function(cb) {
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    const res = cb(this[i], i, this)
    newArr.push(res)
  }
  return newArr
}

const res = arr.map((item, index, arr) => {
  return item + '1'
})

console.log(res);