let arr = ['a', 'b', 'c', 'c', 'd', 'e'];

Array.prototype.my_splice = function(...args) {
  // if (len === 0) return []
  let start = args.shift() === undefined ? 0 : args.shift()
  let len = args.shift()

  const res = [], newArr = []
  for (let i = start; i < start + len; i++) {
    res.push(this[i])
  }

  for (let j = 0; j < this.length; j++) {
    if (j < start || j >= start + len) {
      newArr.push(this[j])
    }
    if (j === start) {
      newArr.push(...args)
    }
  }

  while(this.length) {
    this.pop()
  }
  this.push(...newArr)

  return res

}

const res = arr.my_splice(undefined, 1)

console.log(res, arr);
