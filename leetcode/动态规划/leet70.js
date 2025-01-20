let arr = [1, 2, 3, 4, 5]
// 1, 2, 3, 4, 5
// 1, 2, 3,    5
// 1, 2,  , 4, 5
// 1, , 3, 4, 5
//  , 2, 3, 4, 5

// f(n) = f(n - 1) + f(n - 2)
// f(n - 1)  f(n - 2)

// 1 1    2
// 1 1 1     1 2    2 1
// 1111  112  121  211  22

// f(10) = f(9) + f(8)

// climbStairs(5)
// climbStairs(4)                       climbStairs(3)
// climbStairs(3) +       climbStairs(2)
// climbStairs(2) + climbStairs(1)



// const f = [ , 1, 2, 3, 5, 8]
// var climbStairs = function(n) {
//   if (n === 1) {
//     return 1
//   }
//   if (n === 2) {
//     return 2
//   }
//   if (f[n] === undefined) {
//     f[n] = climbStairs(n - 1) + climbStairs(n - 2)
//   }
  
//   return f[n]
// };

// climbStairs(n)



var climbStairs = function(n) {
  const f = []
  f[1] = 1
  f[2] = 2
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2]
  }
  return f[n]
}