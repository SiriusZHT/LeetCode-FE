// 剑指 Offer II 068. 查找插入位置
// 给定一个排序的整数数组 nums 和一个整数目标值 target ，请在数组中找到 target ，并返回其下标。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。

 

// 示例 1:

// 输入: nums = [1,3,5,6], target = 5
// 输出: 2
// 示例 2:

// 输入: nums = [1,3,5,6], target = 2
// 输出: 1
// 示例 3:

// 输入: nums = [1,3,5,6], target = 7
// 输出: 4
// 示例 4:

// 输入: nums = [1,3,5,6], target = 0
// 输出: 0
// 示例 5:

// 输入: nums = [1], target = 0
// 输出: 0
 

// 提示:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums 为无重复元素的升序排列数组
// -104 <= target <= 104
 

// 注意：本题与主站 35 题相同： https://leetcode-cn.com/problems/search-insert-position/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums == null || !nums.length) {
    return -1;
  }
  // 左闭右闭区间
  let begin = 0,
    end = nums.length-1;
  while (begin <= end) {
    // 下面这样写是考虑大数情况下避免溢出
    let mid = begin + ((end - begin) >> 1);
    if (nums[mid] > target) {
      // 在左半区间中查找
      end = mid - 1;
    } else if (nums[mid] < target) {
      // 在右半区间中查找
      begin = mid + 1;
    } else {
      // 正好就是
      return mid;
    }
  }
  // 查找的是左边界，所以返回begin
//   根据if的判断条件，
//   left左边的值一直保持小于target，
//   right右边的值一直保持大于等于target，
//   而且left最终一定等于right+1，这么一来，
//   循环结束后，在left和right之间画一条竖线，恰好可以把数组分为两部分：
//   left左边的部分和right右边的部分，
//   而且left左边的部分全部小于target，并以right结尾；
//   right右边的部分全部大于等于target，并以left为首。所以最终答案一定在left的位置。
  return begin;
};

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/N6YdxV/solution/ben-zhi-shang-huan-shi-li-yong-er-fen-fa-u5yu/