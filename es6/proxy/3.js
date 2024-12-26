let obj = {
  a: 1,
  b: 2,
  c: 3
}

let proxy = new Proxy(obj, {
  get: function(target, key) {
    return target[key]
  },
  set: function(target, key, value) {
    target[key] = value
  },
  // xxxx 11个函数
})

proxy.a = 10
console.log(proxy.a);
