let obj = {
  a: 1,
  b: [1, 2, {c: 3}, [4]],
  d: {
    e: 2,
    f: 3
  },
  g: null
}

// {
//   'a': 1,
//   'b[0]': 1,
//   'b[1]': 2,
//   'b[2].c': 3,
//   'b[3][0]': 4,
//   'd.e': 2,
//   'd.f': 3,
//   // g: null
// }

function flatObj(target) {
  let res = {}

  function help(target, oldKey) {
    for (let key in target) {   // [1, 2, {c: 3}, [4]] ,  'b'
      let newKey
      if (oldKey) { // 递归进来的
        if (Array.isArray(target)) {
          newKey = `${oldKey}[${key}]`  // 'b[2]'
        } else {
          newKey = `${oldKey}.${key}`  // 'b.2'
        }
      } else {
        newKey = key  // 'b'
      }


      if (Object.prototype.toString.call(target[key]) === '[object Object]' || Array.isArray(target[key])) {
        // target[key]
        help(target[key], newKey)  // {c: 3}, 'b[2]'
      } else {
        res[newKey] = target[key]
      }
    }
  }
  help(target, '')

  return res
}

console.log(flatObj(obj))