// 【字节012】121. 买卖股票的最佳时机I
// 只能完成一次买+卖操作
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    for(let i of prices) {
        if(minPrice > i) {
            // 找到最小值
            minPrice = i;
        } else {
            // 找到最大值
            maxProfit = Math.max(maxProfit, i - minPrice);
        }
    }
    return maxProfit;
};