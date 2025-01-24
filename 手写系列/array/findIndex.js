let arr = ['a', 'b', 'c', 'c', 'd', 'e'];

Array.prototype.my_findIndex = function (fc) {
  for (let i = 0; i < this.length; i++) {
    const res = fc(this[i], i, this)
    if (res) {
      return i
    }
  }
  return -1
}


const res = arr.my_findIndex((item, i, arr) => {
  return item === 'f'
})

console.log(res);
