function add(a, b, c) {
  return a + b + c;
}

// add(1, 2)

// let addCurry = curry(add);
// addCurry(1)(2);  // 3



function curry(fn, ...args) {
  let length = fn.length;
  args = args || [];  // [1, 2]


  return function () {
    let _args = args.slice(0), arg;  // _args 是curry帮接受的参数

    for (let i = 0; i < arguments.length; i++) { // 返回的 function 帮接受了多少个参数
      arg = arguments[i];
      _args.push(arg);  // [1, 2, 3]
    }

    // curry 接受的参数个数 + 第一层返回的function 接受的参数个数 < 原函数接受的参数个数
    // 说明还没有接受完，继续返回 function
    if (_args.length < length) {
      return curry(fn, ..._args) // 1, 2
    } else {
      return fn(..._args)
    }
  }

}

const res = curry(add);
res(1)(2)(3)

// console.log(res(1)(2)(3));
// console.log(res(1)(2, 3));// 6
// console.log(res(1, 2)(3));// 6
// console.log(res(1, 2, 3));// 6