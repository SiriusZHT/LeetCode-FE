// 剑指 Offer 39. 数组中出现次数超过一半的数字
// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
// 
// 示例 1:
// 
// 输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
// 输出: 2
//  
// 
// 限制：
// 
// 1 <= 数组长度 <= 50000
// 
//  
// 
// 注意：本题与主站 169 题相同：https://leetcode-cn.com/problems/majority-element/
// 
// 
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // 摩尔投票
    // 相等就count++
    // 不相等之前的count--
    // 如果count到0了，说明之前的所有元素都被中和了，从当前位置又开始
    let count = 0,
        cur = 0;
    for(let num of nums) {
        if(count === 0) {
            cur = num;
        }
        if(cur === num) {
            count++;
        } else {
            count--;
        }
    }
    return cur;
};