// 剑指 Offer 46. 把数字翻译成字符串Copy for Markdown
// 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

// 示例 1:

// 输入: 12258
// 输出: 5
// 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"

// 递归的解题思路
// 举例来说，翻译 1273 可以分解成：翻译 1 和剩下的 273 、翻译 12 和剩下的 73
// 也就是说对于一个字符串而言，当下都有2种选择，翻译1个数字或者翻译2个数字
// 翻译2个数字的前提在于这俩个数字的范围在10到25之间

// 递归的实现代码
/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  const dfs = (str, index) => {
    // base case 抵达边界
    if (index >= str.length - 1) return 1;
    const cur = Number(str[index] + str[index + 1]);
    if (cur >= 10 && cur <= 25)
      return dfs(str, index + 1) + dfs(str, index + 2);
    else return dfs(str, index + 1);
  };
  return dfs(num.toString(), 0);
};

// 递归的实现代码加备忘录版本
/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  let n = num.toString().length;
  let memo = new Array(n).fill(0);
  const dfs = (str, index) => {
    // base case 抵达边界
    if (index >= str.length - 1) return 1;
    if (memo[index]) return memo[index];
    const cur = Number(str[index] + str[index + 1]);
    if (cur >= 10 && cur <= 25)
      memo[index] = dfs(str, index + 1) + dfs(str, index + 2);
    else memo[index] = dfs(str, index + 1);
    return memo[index];
  };
  return dfs(num.toString(), 0);
};

// 动态规划的解题思路
// dp[i] ：翻译前 i 个数的方法数。
// 状态转移方程：如果当前及临近后面一位数字在10到25范围内，dp[i]=dp[i−2]+dp[i−1]，否则dp[i]=dp[i-1]
// dp[0]=1 是为了简化代码
/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  const str = num.toString();
  const n = str.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    let cur = str.substr(i - 2, 2);
    if (cur >= 10 && cur <= 25) dp[i] = dp[i - 1] + dp[i - 2];
    else dp[i] = dp[i - 1];
  }
  return dp[n];
};