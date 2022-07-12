// 剑指 Offer II 090. 环形房屋偷盗
// 一个专业的小偷，计划偷窃一个环形街道上沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

// 给定一个代表每个房屋存放金额的非负整数数组 nums ，请计算 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

 

// 示例 1：

// 输入：nums = [2,3,2]
// 输出：3
// 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
// 示例 2：

// 输入：nums = [1,2,3,1]
// 输出：4
// 解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
//      偷窃到的最高金额 = 1 + 3 = 4 。
// 示例 3：

// 输入：nums = [0]
// 输出：0
 

// 提示：

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 1000
 

// 注意：本题与主站 213 题相同： https://leetcode-cn.com/problems/house-robber-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var robRange = (start, end) => {
        let cur = nums[start], maxSum = Math.max(nums[start], nums[start + 1]);
        for(let i = start + 2; i <= end; i++) {
            // dp[i - 1]
            let temp = maxSum;
            // cur = dp[i - 2]  maxSum = dp[i]
            // max 进入这次循环的迭代
            maxSum = Math.max(cur + nums[i], temp);
            // cur 进行这次循环的迭代 
            // 也就是 下次循环的时候 假如 i 是 下次循环的值，cur 还是 dp[i - 2]
            // 因为 cur 被迭代赋值成 这次循环的 dp[i - 1]
            cur = temp;
        }
        return maxSum;
    }

    if(nums.length === 0) return;
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);
    return Math.max(robRange(0, nums.length - 2), robRange(1, nums.length - 1));
};
