// 剑指 Offer II 020. 回文子字符串的个数Copy for Markdown
// 给定一个字符串 s ，请计算这个字符串中有多少个回文子字符串。

// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

 

// 示例 1：

// 输入：s = "abc"
// 输出：3
// 解释：三个回文子串: "a", "b", "c"
// 示例 2：

// 输入：s = "aaa"
// 输出：6
// 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
 

// 提示：

// 1 <= s.length <= 1000
// s 由小写英文字母组成
 

// 注意：本题与主站 647 题相同：https://leetcode-cn.com/problems/palindromic-substrings/ 

// 注意：这里还是一维DP：DP[i][j] 表示 i - j 索引是不是回文串
// 初始化是 i - j <= 2
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const arr = new Array(s.length);
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        arr[i] = new Array(s.length).fill(false);
        for(let j = 0; j <= i; j++) {
            if(s[i] === s[j] && (i - j <= 2 || arr[j + 1][i - 1] === true)) {
                arr[j][i] = true;
                count++;
            }
        }
    }
    return count;
};
