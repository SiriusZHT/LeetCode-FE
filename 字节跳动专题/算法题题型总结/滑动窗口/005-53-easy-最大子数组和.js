// 【字节005】53. 最大子数组和
// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组 是数组中的一个连续部分。
/**
 * @param {number[]} nums
 * @return {number}
 */
// DP
var maxSubArray = function(nums) {
    const dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    let max = dp[0];
    for(let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        max = Math.max(dp[i], max);
    }
    return max;
};

// 滑动窗口
var maxSubArray = function(nums) {
    if(nums.length === 0) return 0;
    let [left, right, sum, max] = [0, 0, 0, nums[0]];
    while(right < nums.length) {
        // 扩窗
        sum += nums[right++];
        // 缩窗条件 sum 被搞成 负 的了，缩窗让他变 正
        while(sum < 0) {
            sum -= nums[left++];
        }
        max = Math.max(max, sum);
    }
    // 处理全是负数的情形
    let maxVal = nums[0];
    for(let i = 1; i < nums.length; i++) {
        maxVal = Math.max(maxVal, nums[i]);
    }
    // 如果最大值都是负数
    return maxVal < 0 ? maxVal : max;
};