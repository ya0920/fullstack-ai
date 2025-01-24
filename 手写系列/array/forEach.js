let arr = ['a', 'b', 'c', 'd', 'e'];

Array.prototype.my_forEach = function(cb) {
  for(let i = 0; i < this.length; i++) {
    cb(this[i], i, this)
  }
}

arr.my_forEach((item) => {
  // console.log(item, index, arr);
  arr[index] = item + '1'
})

console.log(arr);




// function foo(a, b, c) {
//   console.log(a, b, c);
// }

// foo(1)