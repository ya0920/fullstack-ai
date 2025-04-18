const foo2 = {
  "A": 1,
  "B": {
    "A": 2,
    "B": 4
  },
  "CC": {
    "D": {
      "E": 3,
      "F": 5
    }
  }
}


const foo1 = {
  'A': 1,
  'B.A': 2,
  'B.B': 4,
  'CC.D.E': 3,
  'CC.D.F': 5
}


function flatObj(obj) {
  let res = {
    // "A": 1,
    // "B.A": 2,
  }

  function help(target, oldKey) {
    
    for (let key in target) {
      let newKey = oldKey ? `${oldKey}.${key}` : key // "B"."A"

      if (typeof target[key] === 'object' && target[key] !== null) {
        help(target[key], newKey) // {}  // 将 “B” 这个 key 传进去
      } else {
        res[newKey] = target[key]
      }
    }
  }
  help(obj, '')

  return res 
}

console.log(flatObj(foo2))



// let [a, b] = {a: 1, b: 2}