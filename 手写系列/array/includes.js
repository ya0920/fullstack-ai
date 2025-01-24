let arr = ['a', 'b', 'c', 'c', 'd', 'e'];

Array.prototype.my_includes = function (item, ...args) {
  let index
  if (args.length && !Number.isNaN(Number(args[0]))) {
    index = Number(args[0])
  } else {
    index = 0
  }
  for (let i = index; i < this.length; i++) {
    if (this[i] === item) {
      return true
    }
  }
  return false
}

const res = arr.my_includes('a')

console.log(res);
