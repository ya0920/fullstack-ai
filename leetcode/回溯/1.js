let arr = [1, 2, 3]  
// [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
// 检查手里剩余的数字
// 选择一个填坑

function permute(nums) {
  let len = nums.length
  const current = []  // 记录当前的排列内容
  const res = []
  const visited = {}  // 记录已经填过的数字 

  function dfs(nth) {
    if (nth === len) {
      res.push(current.slice())
      return
    }

    for (let i = 0; i < len; i++) {
      if (visited[nums[i]]) { // 如果此时遍历到的值上一个坑已经用过了，就跳过
        continue
      }
      current.push(nums[i])
      visited[nums[i]] = true  
      dfs(nth + 1) // 继续填下一个坑
      current.pop() // 撤销操作
      visited[nums[i]] = false
    }
  }

  dfs(0) // 从索引为0的坑位开始填数字

  return res
}


console.log(permute(arr));


