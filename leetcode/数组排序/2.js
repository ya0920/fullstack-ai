let arr = [1, 2, 3, 4, 1, 5, 6, 7]

// function bubble(arr) {
//   const len = arr.length

//   for (var i = 0; i < len; i++) {
//     let flag = false
//     for (var j = 0 ; j < len - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//         flag = true
//       }
//     }
//     if (!flag) return arr
//   }
//   return arr
// }

// function bubble(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//         [arr[j], arr[i]] = [arr[i], arr[j]]
//       }
//     }
//   }
//   return arr
// }

function bubble(arr) {
  for (var i = 0; i < arr.length; i++) {
    let min = getMin(arr.slice(i))
    let minIndex = arr.indexOf(min)  // 重复项

    let flag = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = flag

    // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

function getMin(arr) {
  let min = Infinity
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}

console.log(sbubble(arr));
