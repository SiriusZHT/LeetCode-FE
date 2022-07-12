/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function (nums) {
    let fast = 0,
      slow = 0;
    while (fast < nums.length) {
      if (nums[fast] != 0) {
        [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
        slow++;
      }
      fast++;
    }
  };
  
  
//   作者：angela-x
//   链接：https://leetcode.cn/problems/move-zeroes/solution/li-yong-kuai-man-zhi-zhen-ji-qiao-yi-don-27di/