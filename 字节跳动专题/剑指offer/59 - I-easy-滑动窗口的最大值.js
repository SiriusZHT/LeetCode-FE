//面试题59 - I. 滑动窗口的最大值

//给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
//
// 示例:
//
// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7]
// 解释:
//
//   滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
//  
//
// 提示：
// 你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
//
var maxSlidingWindow = function(nums, k) {
    if (!nums.length) return [];
    let i = 0;
    let result = [];
    let curMax;
    while(i <= nums.length - k){
        // 更新最大值
        curMax = Math.max(...nums.slice(i, i + k));
        result.push(curMax);
        i++;
    }
    return result;
};

// 作者：sirius
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const queue = [],
          res = [];
    for(let right = 0, left = 1 - k; right < nums.length; right++, left++){
        // 单调栈 的 最大值 等于 滑出去的值 就重开
        if(left > 0 && queue[0] == nums[left - 1]) {
            queue.shift();
        }
        // 保证添加后的元素 在队列中 单调
        while(queue.length != 0 && queue[queue.length - 1] < nums[right]) {
            queue.pop();
        }
        queue.push(nums[right]);
        if(left >= 0) {
            res[left] = queue[0];
        }
    }
    return res;
};