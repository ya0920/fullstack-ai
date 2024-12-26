let obj = {
  a: 1,
  b: 2,
  c: 3
}

for (let key in obj) {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    get() {
      return value
    },
    set(val) {
      value = val
      log()
    }
  })
}



obj.a = 10
obj.b = 20
obj.c = 30


function log() {
  console.log(obj.a + obj.b + obj.c);
}




// let o = {
//   a: 1,
// }
// o.a = 2  // o.getter(a)   o.setter(a, 2)

