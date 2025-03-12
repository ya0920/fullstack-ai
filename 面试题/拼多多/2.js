let str1 = 'A B C B D AB', str2 = 'B D C A B'
function longestCommonSubsequence(text1, text2) {
  // 你的实现
  let m = text1.length;
  let n = text2.length;
  const dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0))  // dp[i][j] = dp[i-1][j-1] + 1

  // text1[i - 1] !== text2[j - 1]      dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
  // i - 2     j - 1
  // i - 1     j - 2

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  console.log(dp);
  
  return dp[m][n]

}
// 测试
console.log(longestCommonSubsequence('ABCBDAB', 'BDCAB')); // 4
// console.log(longestCommonSubsequence('abcde', 'ace')); // 3



dp[7][5]

[
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 1, 1 ],
  [ 0, 1, 1, 1, 1, 2 ],
  [ 0, 1, 1, 2, 2, 2 ],
  [ 0, 1, 1, 2, 2, 3 ],
  [ 0, 1, 2, 2, 2, 3 ],
  [ 0, 1, 2, 2, 3, 3 ],
  [ 0, 1, 2, 2, 3, 4 ]
]