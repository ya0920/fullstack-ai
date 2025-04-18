let arr = [7, 8, 4, 5, 3, 9, 1, 6]

// [7, 8, 4, 5]  [3, 9, 1, 6]
// [7, 8] [4, 5]      [3, 9] [1, 6]
// [7] [8] [4] [5]    [3] [9] [1] [6]

// [7, 8] [4, 5]      [3, 9] [1, 6]
// [4, 5, 7, 8]      [1, 3, 6, 9]
// [1, 3, 4, 5, 6, 7, 8, 9]


function mergeSort(arr) {
  const len = arr.length
  if (len <= 1) {
    return arr
  }
  // 找分割点
  const mid = Math.floor(len / 2)

  const leftArr = mergeSort(arr.slice(0, mid))

  const rightArr = mergeSort(arr.slice(mid, len))

  arr = mergeArr(leftArr, rightArr) // 合并两个有序数组，依旧是有序的
  return arr
}


function mergeArr(arr1, arr2) {
  let i = 0, j = 0
  let res = []
  const len1 = arr1.length
  const len2 = arr2.length
  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++
    }
  }

  if (i < len1) {
    res = res.concat(arr1.slice(i))
  } else {
    res = res.concat(arr2.slice(j))
  }

  return res

}



console.log(mergeSort(arr));


// [1, 2, 3, 5, 7]
// [4, 6, 8, 9]