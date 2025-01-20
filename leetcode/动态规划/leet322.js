// f(11) = 
// Math.min(f(11-c1)+1, f(11-c2)+1, f(11-c3)+1, ... , f(11-cn)+1)


var coinChange = function(coins, amount) {
  const f = []
  f[0] = 0
  // [1 - amount] 之间的总额
  for (let i = 1; i <= amount; i++) {
    f[i] = Infinity
    for (let j = 0; j < coins.length; j++) {
      // coins中有没有比 i 这个面额小的
      if (i - coins[j] >= 0) {
        f[i] = Math.min(f[i], f[i-coins[j]] + 1)
      }
    }
  }

  return f[amount] === Infinity ? -1 : f[amount]
};