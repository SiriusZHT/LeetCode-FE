// 滑动窗口，有两个边界，一个左边界，一个右边界，开始的时候，左右边界都指向数组的首位置
// 滑动窗口的总体思路是先移动右边界，让窗口中的值满足题目的解，也在是说在找到可行解的情况下，再移动左边界，在可行解里面寻找最优解
// 具体到当前这个题目，由于我们的目标是求出所有数字乘积小于k的子数组个数，一旦向右移动左边界到某个位置时子数组的乘积小于k，就不需要再向右移动左边界
// 因为此时只要保持窗口右边界不动，窗口左边界形成的所有子数组的数字乘积就一定会小于k;这时两个指针之间有多少个数字，就找到了多少个数字乘积小于k的子数组

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let l = r = 0;
    let len = nums.length;
    let temp = 1;
    let count = 0;
    while(r < len) {
        temp *= nums[r++];
        while(l < r && temp >= k) {
            temp = temp / nums[l++];
        }
        if(l <= r) {
            count += r - l;
        }
    }
    return count;
};

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/ZVAVXX/solution/jian-zhi-offer-zhuan-xiang-tu-po-ban-shu-lwib/