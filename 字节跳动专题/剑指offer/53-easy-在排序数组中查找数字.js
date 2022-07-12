// 面试题53 - I. 在排序数组中查找数字 I easy


// 统计一个数字在排序数组中出现的次数。
//
// 示例 1:
// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2
// 示例 2:
// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: 0
//  
//
// 限制：
// 0 <= 数组长度 <= 50000
//

// 方法一：JS 的 indexof 和 lastIndexOf
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.indexOf(target) === -1) return 0;
    return  nums.lastIndexOf(target)- nums.indexOf(target) + 1;
};

// 方法二：二分法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let find = (isLeft) => {
    // 搜索区间是前闭后闭
    let start = 0,
      end = nums.length - 1;
    while (start <= end) {
      // 下面这样写是考虑大数情况下避免溢出
      let mid = start + ((end - start) >> 1);
      if (nums[mid] < target) {
        start = mid + 1;
      } else if (nums[mid] > target) {
        end = mid - 1;
      } else {
        // 寻找左边界
        if (isLeft) {
          // 如果mid不是第一个元素并且前面一个相邻的元素也跟mid相等，则搜索区间向左缩小
          // 原先搜索条件是mid > 0 && nums[mid] == nums[mid - 1]   现在已经简化为nums[mid] == nums[mid - 1]
          if (nums[mid] == nums[mid - 1]) {
            end = mid - 1;
          } else {
            return mid;
          }
        } else {
          // 寻找右边界
          // 如果mid不是最后一个元素并且后面一个相邻的元素也跟mid相等，则搜索区间向右缩小
          if (nums[mid] == nums[mid + 1]) {
            start = mid + 1;
          } else {
            return mid;
          }
        }
      }
    }
    // 找不到的情况
    return -1;
  };
  let left = find(true),
    right = find(false);
  return left != -1 && right != -1 ? right - left + 1 : 0;
};


// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/solution/li-yong-er-fen-sou-suo-li-qiu-er-fen-sou-rba5/

