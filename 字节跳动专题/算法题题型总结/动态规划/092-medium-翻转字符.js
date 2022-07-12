// 剑指 Offer II 092. 翻转字符Copy for Markdown
// 如果一个由 '0' 和 '1' 组成的字符串，是以一些 '0'（可能没有 '0'）后面跟着一些 '1'（也可能没有 '1'）的形式组成的，那么该字符串是 单调递增 的。

// 我们给出一个由字符 '0' 和 '1' 组成的字符串 s，我们可以将任何 '0' 翻转为 '1' 或者将 '1' 翻转为 '0'。

// 返回使 s 单调递增 的最小翻转次数。

 

// 示例 1：

// 输入：s = "00110"
// 输出：1
// 解释：我们翻转最后一位得到 00111.
// 示例 2：

// 输入：s = "010110"
// 输出：2
// 解释：我们翻转得到 011111，或者是 000111。
// 示例 3：

// 输入：s = "00011000"
// 输出：2
// 解释：我们翻转得到 00000000。
 

// 提示：

// 1 <= s.length <= 20000
// s 中只包含字符 '0' 和 '1'
 

// 注意：本题与主站 926 题相同： https://leetcode-cn.com/problems/flip-string-to-monotone-increasing/

/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    // dp[i][0] 表示前i个元素，最后一个元素为0的最小翻转次数
    // dp[i][1] 表示前i个元素，最后一个元素位1的最小翻转次数
    const dp = new Array(s.length);
    for(let i = 0; i < s.length; i++) {
        dp[i] = new Array(2);
    }
    // 因为是单调递增 所以0要翻1次，1要翻0次
    dp[0][0] = s.charAt(0) === '0' ? 0 : 1;
    dp[0][1] = s.charAt(0) === '1' ? 0 : 1;

    for(let i = 1; i < s.length; i++) {
        // 前i个元素 全翻转成0
        dp[i][0] = dp[i - 1][0] + (s.charAt(i) === '0' ? 0 : 1);
        // 前i个元素 部分（含0的情况）翻转成1 形成单调递增
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1]) + (s.charAt(i)=== '1' ? 0 : 1);
    }
    return Math.min(dp[s.length - 1][0], dp[s.length - 1][1]);
};

// 题解 by Sirius
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    // dp[i][0] 表示前i个元素，最后一个元素为0的最小翻转次数
    // dp[i][1] 表示前i个元素，最后一个元素位1的最小翻转次数
    const dp = new Array(s.length).fill().map(item => new Array(2));
    dp[0][0] = s.charAt(0) === '0' ? 0 : 1;
    dp[0][1] = s.charAt(0) === '1' ? 0 : 1;
    for(let i = 1; i < s.length; i++) {
        // 如果当前 i 是要以 0 结尾，因为递增，所以肯定是之前的 0 + 当前的 1（要翻转） 或 0（不用翻转）
        dp[i][0] = dp[i - 1][0] + (s.charAt(i) === '0' ? 0 : 1);
        // 如果当前 i 是要以 1 结尾，因为递增 且 要找最小，所以一定是之前 0 或 1 的最小 + 当前的 1（不翻转） 或 0（要翻转）
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1]) + (s.charAt(i) === '0' ? 1 : 0);
    }
    return Math.min(dp[s.length - 1][0], dp[s.length - 1][1]);
};