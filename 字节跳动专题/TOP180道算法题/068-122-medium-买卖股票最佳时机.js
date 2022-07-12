// 122. 买卖股票的最佳时机 II
// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
// 返回 你能获得的 最大 利润 。

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 当天的利润：
    // 如果 0 买入，当天利润就是 之前利润 - 当天价格
    // 如果 1 卖出，当天利润就是 之前利润 + 当天价格
    const memo = new Array(prices.length).fill().map(() => new Array(2).fill(0));
    memo[0] = [-prices[0], 0];
    let max = 0;
    for(let i = 1; i < prices.length; i++) {
        memo[i][0] = Math.max(memo[i - 1][1] - prices[i], memo[i - 1][0]);
        memo[i][1] = Math.max(memo[i - 1][0] + prices[i], memo[i - 1][1]);
        max = Math.max(max, memo[i][0], memo[i][1]);
    }
    return max;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  const dp = new Array(prices.length).fill().map(item => new Array(2));
  // 0 是当天不持有股票 1是当天持有股票 的 利润
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  let max = 0;
  for(let i = 1; i < prices.length; i++) {
    // 当天不持有：
    // 前一天也不持有
    // 前一天持有，当天卖出
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    // 当天持有：
    // 前一天持有
    // 前一天不持有，当天买入
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
    max = Math.max(dp[i][0], dp[i][1]);
  }
  return max;
}