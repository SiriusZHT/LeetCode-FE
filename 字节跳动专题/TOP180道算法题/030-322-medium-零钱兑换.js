// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
// 你可以认为每种硬币的数量是无限的。
// 输入：coins = [1, 2, 5], amount = 11
// 输出：3 
// 解释：11 = 5 + 5 + 1
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // dp[当前amount] = 需要多少币数量
    const dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for(let i = 0; i < dp.length; i++) {
        for(let coin of coins) {
            if(i - coin < 0) continue;
            dp[i] = Math.min(1 + dp[i - coin], dp[i]);
        }
    }
    return dp[amount] === amount + 1 ? -1 : dp[amount];
};