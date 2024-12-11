let arr = [2, 1, 7, 3, 4, 1, 6, 5]

// [1, 2, 3, 4, 5]   3

function insertSort(arr) {
  const len = arr.length
  let target
  for (let i = 1; i < len; i++) {
    target = arr[i]
    let j = i
    // 遍历已经有序的值，找出target应在的位置
    while(arr[j - 1] > target) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = target
  }

  return arr
}

console.log(insertSort(arr));
