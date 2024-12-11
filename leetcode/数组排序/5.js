let arr = [2, 4, 7, 5, 1]

// 3  [2, 1]            [4, 7, 5 ]
//    1 []  [2]       7   [4, 5]      []
//                      5 [4]  []
                    //    [4, 5, ]

//      [1, 2, 3, 4, 5, 7 ]    

function quikSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let middleIndex = Math.floor(arr.length / 2)
  let middle = arr.splice(middleIndex, 1)[0]
  let left = []
  let right = []
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i] < middle) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  // quikSort(left)
  // quikSort(right)

  return [...quikSort(left), middle, ...quikSort(right)]
}


console.log(quikSort(arr));
