// 53- 2 easy 0～n-1中缺失的数字

// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。
// 在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
//
// 示例 1:
// 输入: [0,1,3]
// 输出: 2
// 示例 2:
// 输入: [0,1,2,3,4,5,6,7,9]
// 输出: 8
//
// 限制：
// 1 <= 数组长度 <= 10000

// 方法一：等差数列求和
// 题目的本质意思是，现在有个等差数列 0, 1, 2,…, n，其中少了某一个数字，让我们把它找出来
// 运用等差数列求和公式就可以快速求得
// 时间复杂度为O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;
  // 公式：(首项 + 末项) * 项数 / 2
  let expect = ((0 + n) * (n + 1)) / 2;
  // 数组求和
  let sum = nums.reduce((prev, next) => prev + next, 0);
  return expect - sum;
};

// 方法二 二分查找
// 它是一个递增排序数组
// 一看到排序数组，应该第一反应就是用二分查找，这样可以把时间复杂度减少到O(logn)
// 具体思路是，我们可以把整个数组看成2部分
// 左子数组： nums[i] = i
// 右子数组： nums[i] != i
// 而本质上我们就是求nums[i] != i的第1个，也就是左边界

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let left = 0,
    right = nums.length - 1;
  // 左闭右闭区间
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    /* 把整个数组看成
    左子数组： nums[i] = i
    右子数组： nums[i] != i */
    // 当中间元素跟索引相等，那就应该去右子数组中查找
    if (nums[mid] == mid) left = mid + 1;
    // 如果不等的话，就去找左子数组中查找，因为我们本质上是要找不相等的第1个（或者说最左边的那个）
    else right = mid - 1;
  }
  return left;
};

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/solution/yun-yong-deng-chai-shu-lie-qiu-he-zhi-xu-bib2/