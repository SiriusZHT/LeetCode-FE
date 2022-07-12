// 剑指 Offer 14- I. 剪绳子
// 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

// 示例 1：

// 输入: 2
// 输出: 1
// 解释: 2 = 1 + 1, 1 × 1 = 1
// 示例 2:

// 输入: 10
// 输出: 36
// 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36

/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    // base case
    if(n === 0) return 0;
    if(n === 1 || n === 2) return 1;
    if(n === 3) return 2;

    const dp = [0, 1, 2, 3]; // n + 1
    
    for(let i = 4; i <= n; i++) {
        let max = 0;
        let temp = 0;
        for(let j = 1; j <= Math.floor(i / 2); j++) {
            temp = dp[j] * dp[i - j];
            max = Math.max(temp, max);
        }
        dp[i] = max;
    }
    
    return dp[n];

};