let n = 4, k = 2

// 1 xxx  4
// [
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [2, 3],
//   [2, 4],
//   [3, 4]
// ]


function combine(n, k) {
  let res = []
  let subset = []

  function dfs(index) {
    if (subset.length === k) {
      res.push(subset.slice())
      return
    }

    for (let i = index; i <= n; i++) {
      subset.push(i)
      dfs(i + 1)
      subset.pop()
    }
  }
  dfs(1)

  return res
}

console.log(combine(n, k))