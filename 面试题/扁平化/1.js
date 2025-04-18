let arr = [1, {a: 1}, [2, [3, 4]]]   // [1, 2, 3, 4]

// console.log(arr.flat(Infinity));

function flatten2(arr) {
  let result = []
  for (let item of arr) {
    if (Array.isArray(item)) {
      // result = result.concat(flatten(item))
      // result.push(...flatten(item))
      result = [...result, ...flatten(item)]
    } else {
      result.push(item)
    }
  }

  return result
}


function flatten4(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(flatten4(arr));