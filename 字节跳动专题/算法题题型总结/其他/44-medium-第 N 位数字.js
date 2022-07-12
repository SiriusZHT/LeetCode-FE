// 400. 第 N 位数字
// 给你一个整数 n ，请你在无限的整数序列 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...] 中找出并返回第 n 位上的数字。
// 示例 1：

// 输入：n = 3
// 输出：3
// 示例 2：

// 输入：n = 11
// 输出：0
// 解释：第 11 位数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是 0 ，它是 10 的一部分。
// 解题思路
// 确定n所在的位数digit，比方说1~9范围内的位数为1，10~99范围内的位数为2，100~999范围内的位数是3，依此类推
// 确定n所在的数字num，比方说我们要知道它是12还是99还是135
// 确定n是num中的哪一位，比方说现在num是13，我们要知道它n是1还是3
// 参考文献面试题44. 数字序列中某一位的数字（迭代 + 求整 / 求余，清晰图解）
// 可以用12、15、16等去举例子调用调试代码方便理解

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    var len = 1;
    var range = 9;
    var base = 1;
    while(n>len*range)
    {
        n -= len *range;
        range *= 10;
        base *= 10;
        len++;
    }
    // [100, 101, 102,...]
    // 100 should have offset 0, use (n-1) to make the counting index from 0-based.
    var num = base + Math.floor((n-1)/len);
    var s = num.toString();
    return parseInt(s[(n-1)%len]);
};