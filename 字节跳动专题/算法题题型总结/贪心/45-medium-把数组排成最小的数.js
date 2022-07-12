// 剑指 Offer 45. 把数组排成最小的数
// 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

//  示例 1:

// 输入: [10,2]
// 输出: "102"
// 示例 2:

// 输入: [3,30,34,5,9]
// 输出: "3033459"
 
/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    // 贪心算法：保证当前拼接的数是最优的，那么到最后的结果就是最优的
    const res = [];
    for(let i of nums) {
        res.push(i.toString());
    }
    res.sort((a, b) => (a + b) - (b + a));
    return res.join("");
};