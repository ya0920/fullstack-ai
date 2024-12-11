let arr = [2, 4, 7, 3, 1, 1, 6, 5]

function selectSort(arr) {
  const len = arr.length
  let minIndex
  // 比较的是 i， j 这个区间的值
  for (let i = 0; i < len; i++) {
    minIndex = i
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}

console.log(selectSort(arr));
