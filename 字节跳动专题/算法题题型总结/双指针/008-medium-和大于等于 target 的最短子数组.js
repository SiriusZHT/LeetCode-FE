// 剑指 Offer II 008. 和大于等于 target 的最短子数组
// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

// 示例 1：

// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
// 示例 2：

// 输入：target = 4, nums = [1,4,4]
// 输出：1
// 示例 3：

// 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
// 输出：0

// 解题思路
// 滑动窗口，有两个边界，一个左边界，一个右边界，开始的时候，左右边界都指向数组的首位置
// 由于目标是找出大于或等于target的最短数组；用一个值来记录窗口内数字的和
// 如果两个指针之间的子数组中所有数字之和小于target，那么把右边界向右移动
// 滑动窗口的总体思路是先移动右边界，让窗口中的值满足题目的解，也在是说在找到可行解的情况下
// 再移动左边界，在可行解里面寻找最优解
// https://leetcode-cn.com/problems/minimum-window-substring/solution/hua-dong-chuang-kou-tong-yong-jie-ti-tao-9v69/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let left = 0,
    sum = 0;
  let minLength = Number.MAX_VALUE; // 也可以用 nums.length + 1 来定义
  for (let right = 0; right < nums.length; right++) {
    // 由于数组中的所有数字都是正整数，因此在子数组中添加新的数字能得到更大的子数组之和
    sum += nums[right];
    // sum>=target 已经是找到了可行解了
    while (left <= right && sum >= target) {
      //  移动左边界，在可行解里面寻找最优解
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left++];
    }
  }
  return minLength == Number.MAX_VALUE ? 0 : minLength;
};

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/2VG8Kg/solution/jian-zhi-offer-zhuan-xiang-tu-po-ban-shu-1epd/