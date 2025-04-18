// 输入：12,345,678
// 输出：123,456,789

let n = 612312312312.54313241



function toThounsand(num) {
  let [integer, decimal ] = num.toString().split('.')
  console.log(decimal);
  
  const len = integer.length
  const arr = []
  let j = 0
  for (let i = len - 1; i >= 0; i--) {
    arr.unshift(integer[i])
    j++
    if (j % 3 === 0 && i !== 0) { // 前面还有数字
      arr.unshift(',')
    }
  }

  integer = arr.join('')

  if (decimal) {
    integer = integer + '.' + decimal
  }

  return integer
}

console.log(toThounsand(n));


