// 剑指 Offer II 070. 排序数组中只出现一次的数字
// 给定一个只包含整数的有序数组 nums ，每个元素都会出现两次，唯有一个数只会出现一次，请找出这个唯一的数字。

 

// 示例 1:

// 输入: nums = [1,1,2,3,3,4,4,8,8]
// 输出: 2
// 示例 2:

// 输入: nums =  [3,3,7,7,10,11,11]
// 输出: 10
 

 

// 提示:

// 1 <= nums.length <= 105
// 0 <= nums[i] <= 105
 

// 进阶: 采用的方案可以在 O(log n) 时间复杂度和 O(1) 空间复杂度中运行吗？

 

// 注意：本题与主站 540 题相同：https://leetcode-cn.com/problems/single-element-in-a-sorted-array/

// 假设在一个排序数组中，所有数字都出现了两次，那么将数组中的数字每两个分成一组，每组的两个数字都是相等的
// 现在 在数组中添加一个只出现一次的数字，比方说[1,1,2,2,3,4,4,5,5]，依旧还是将两个数字分成一组，可以分成(1,1) (2,2) (3,4) (4,5) 以及最后还剩下的数字5，在这几组数字中，前两组的数字分别相同，但后面两组的数字就不相同
// 从上面的例子可以看出，其实我们本质上是找第一组数字不一样的数字，而只出现一次的数字正好是第1个两个数字不相等的分组的第1个数字

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let left = 0;
  let right = nums.length / 2;
  while (left <= right) {
    // 中间值  下面这样写是防止大数情况下溢出
    let mid = left + ((right - left) >> 1);
    let i = mid * 2;
    if (i < nums.length - 1 && nums[i] != nums[i + 1]) {
      // 
      if (mid == 0 || nums[i - 2] == nums[i - 1]) {
        return nums[i];
      }
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return nums[nums.length - 1];
};

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/skFtm2/solution/li-yong-er-fen-sou-suo-cha-zhao-di-yi-zu-n1hn/