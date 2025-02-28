let arr = [
  {name: '张三', age: 18, like: {n: 1}},
  {name: '李四', age: 19},
  {name: '王五', age: 20},
  {name: '张三', age: 18, like: {n: 1}},
]

// const s = new Set(arr)
// console.log([...s]);

function unique(arr) {
  let res = []
  
  for (let i = 0; i < arr.length; i++) {
    let isFind = false
    for (let j = 0; j < res.length; j++) {
      if (equals(arr[i], res[j])) {
        isFind = true
        break
      }
    }
    if (!isFind) {
      res.push(arr[i])
    }
  }

  return res
}

function equals(v1, v2) {
  if ((typeof v1 === 'object' && v1 !== null) && (typeof v2 === 'object' && v2 !== null)) {
    if (Object.keys(v1).length !== Object.keys(v2).length) return false

    for (let key in v1) {
      if (key in v2) {
        // v1[key] === v2[key]
        if (!equals(v1[key], v2[key])) return false
      } else {
        return false
      }
    }

    return true

  } else {
    return v1 === v2
  }
}


console.log(unique(arr));
