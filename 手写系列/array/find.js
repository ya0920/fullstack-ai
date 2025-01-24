let arr = ['a', 'b', 'c', 'c', 'd', 'e'];

Array.prototype.my_find = function (fc) {
  for (let i = 0; i < this.length; i++) {
    const res = fc(this[i], i, this)
    if (res) {
      return this[i]
    }
  }
  return undefined
}


const res = arr.find((item, i, arr) => {
  return item === 'c'
})

console.log(res);
