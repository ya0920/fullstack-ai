//给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。返回滑动窗口中的最大值 。

// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]



//双指针法


var maxSlidingWindow = function(nums, k) {
    const len = nums.length
    const res = []
    const deque = []
    for(let i = 0; i < len; i++) {
        
        while(deque.length && nums[deque[deque.length-1]] < nums[i]) {
            deque.pop()
        }
        deque.push(i)

        //当队列头部存放的最大值，和 i 的距离大于k，则将队列头部元素出队
        while(deque.length && deque[0] <= i - k) {
            deque.shift()
        }

        //该取最大值的时候
        if(i >= k-1) {
            res.push(nums[deque[0]])

        }
        
    }
    return res
};