function sum(...args) {
  let _args = args; // [1, 2, 3]
  return function() {
    if (arguments.length === 0) {  // 最后一次调用
      return _args.reduce((pre, item) => {
        return pre + item;
      }, 0)
    } else {
      _args = [..._args, ...arguments]; // [1, 2, 3, 3, 5]
      return sum(..._args)
    }
  }
}

// console.log(sum(1, 2)());// 3

// console.log(sum(1, 2, 3)(4, 5)());// 15
console.log(sum(1, 2, 3)(4, 5)(6)());// 21