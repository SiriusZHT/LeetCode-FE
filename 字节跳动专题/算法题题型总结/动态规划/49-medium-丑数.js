// 剑指 Offer 49. 丑数
// 我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。


// 示例:

// 输入: n = 10
// 输出: 12
// 解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
// 说明:  

// 1 是丑数。
// n 不超过1690。
// 注意：本题与主站 264 题相同：https://leetcode-cn.com/problems/ugly-number-ii/
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  // 这里fill 1是因为dp[1]默认为1
  const dp = new Array(n + 1).fill(1);
  let accu2 = 1,
    accu3 = 1,
    accu5 = 1;
  for (let i = 2; i <= n; i++) {
    // 后面的丑数一定是由前面的丑数*2、*3、*5得到的
    let num2 = dp[accu2] * 2,
      num3 = dp[accu3] * 3,
      num5 = dp[accu5] * 5;
    // 谁最小就先存谁并且对应的指针往后移
    dp[i] = Math.min(...[num2, num3, num5]);
    if (dp[i] == num2) accu2++;
    if (dp[i] == num3) accu3++;
    if (dp[i] == num5) accu5++;
  }
  return dp[n];
};

// 作者：angela-x
// 题解链接：https://leetcode-cn.com/problems/chou-shu-lcof/solution/dong-tai-gui-hua-fa-shi-tu-jiang-ti-jie-9x6fq/