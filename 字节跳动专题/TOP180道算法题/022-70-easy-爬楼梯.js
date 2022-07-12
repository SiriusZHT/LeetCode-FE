// 一次只能爬 1 or 2 格
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = new Array(n).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    for(let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};