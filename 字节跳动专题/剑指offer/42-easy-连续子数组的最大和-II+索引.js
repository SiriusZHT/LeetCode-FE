// 剑指 Offer 42. 连续子数组的最大和
// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

// 要求时间复杂度为O(n)。

// 示例1:

// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 

// 提示：

// 1 <= arr.length <= 10^5
// -100 <= arr[i] <= 100
// 注意：本题与主站 53 题相同：https://leetcode-cn.com/problems/maximum-subarray/

// 作者：sirius 发现，字节跳动有次面经要输出索引，导致即使刷过的人也挂了
// 所以增加难度，要输出索引
/**
 * @param {number[]} nums
 * @return {Array} [max, left, right]
 */
var maxSubArray = function(nums) {
    const dp = [];
    if(nums.length == 1 || nums.length == 0){
        return nums.length == 1 ? nums[0] : undefined;
    }

    dp[0] = nums[0];
    let max = dp[0];
    let index = 0;
    for(let i = 1; i < nums.length; i++){
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
        max = Math.max(dp[i], max);
        // 记录右边的索引
        index = max === dp[i] ? i : index;
    }
    // 找出左边的索引
    let left, temp = max;
    for(left = index; left >= 0; left--){
        if(temp === 0) break;
        temp -= nums[left];
    }
    return [max, left + 1, index];
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))