function foo(x, y) {
  console.log(this.a, x, y);
  return x + y;
}
const obj = {
  a: 1
}


Function.prototype.myCall = function (...args) {
  // 将 foo 引用到 obj 上
  // 让 obj 调用foo
  // 移除 obj 上的 foo
  const context = args[0]
  const arg = args.slice(1)   // [2, 3, 4]
  context.fn = this
  const res = context.fn(...arg)
  delete context.fn
  return res
}


let res = foo.myCall(obj, 2, 3, 4)
console.log(res);
