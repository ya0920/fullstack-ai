let nums = [2,7,11,15], target = 19

// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length; i++)  { // 左手 
//     // nums[i]  2
//     for (let j = i + 1; j < nums.length; j++) { // 右手
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// };

var twoSum = function(nums, target) {
  const obj = {}
  const len = nums.length

  for (let i = 0; i < len; i++) {
    if (obj[target - nums[i]] !== undefined) {
      return [obj[target - nums[i]], i]
    }
    obj[nums[i]] = i
  }
  return []
}

console.log(twoSum(nums, target));


// O(n^2)