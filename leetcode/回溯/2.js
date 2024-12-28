let arr = [1, 2, 3]
// [
//   [1],
//   [1, 2],
//   [1, 2, 3],
//   [1, 3],
//   [2],
//   [2, 3],
//   [3],
//   []
// ]

function subsets(nums) {
  const res = []
  const len = nums.length
  const subset = []

  function dfs(index) {
    res.push(subset.slice()) // 把盒子中内容放入结果中

    for (let i = index; i < len; i++) {
      subset.push(nums[i]) // 放进盒子中
      dfs(i + 1)
      subset.pop() // 从盒子中拿出
    }
  }
  dfs(0)

  return res
}

console.log(subsets(arr));

