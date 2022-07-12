// 剑指 Offer II 010. 和为 k 的子数组
// 给定一个整数数组和一个整数 k ，请找到该数组中和为 k 的连续子数组的个数。

// 示例 1 :

// 输入:nums = [1,1,1], k = 2
// 输出: 2
// 解释: 此题 [1,1] 与 [1,1] 为两种不同的情况
// 示例 2 :

// 输入:nums = [1,2,3], k = 3
// 输出: 2

// 提示:

// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000
// -107 <= k <= 107

// 注意：本题与主站 560 题相同： https://leetcode-cn.com/problems/subarray-sum-equals-k/

// 这道题其实很好理解，读懂下面两句话即可解决
// const map = new Map([[0, 1]]); 的解释其实是：空数组[]的和为0
// The sum between i and j equals sum of 0 to j minus sum of 0 to i.
// We keep track of the sums from index 0 to any number, this question becomes a 2 sum problem using a hashmap.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 前缀和
// The sum between i and j equals sum of 0 to j minus sum of 0 to i.
// We keep track of the sums from index 0 to any number, this question becomes a 2 sum problem using a hashmap.

// Using ES6 Map this solution reaches 99%, using plain javascript object only 46%

var subarraySum = function(nums, k) {
    const map = new Map([[0, 1]]);
    let sum = 0;
    let total = 0;
    for (let num of nums) {
        sum = sum + num;
        total += (map.get(sum - k) || 0);
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    
    return total;
};