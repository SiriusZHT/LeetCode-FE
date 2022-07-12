// 给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。
// 示例 1：
// 输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
// 输出：3
// 解释：长度最长的公共子数组是 [3,2,1] 。
// 示例 2：
// 输入：nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
// 输出：5
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    const dp = new Array(nums1.length + 1);
    dp[0] = new Array(nums2.length + 1).fill(0);
    let max = 0;
    for(let i = 1; i <= nums1.length; i++) {
        dp[i] = new Array(nums2.length + 1).fill(0);
        for(let j = 1; j <= nums2.length; j++) {
            if(nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                max = Math.max(max, dp[i][j]);
            } else {
                dp[i][j] = 0;
            }
        }
    }
    return max;
};