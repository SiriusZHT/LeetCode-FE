// 剑指 Offer II 086. 分割回文子字符串Copy for Markdown
// 给定一个字符串 s ，请将 s 分割成一些子串，使每个子串都是 回文串 ，返回 s 所有可能的分割方案。

// 回文串 是正着读和反着读都一样的字符串。

 

// 示例 1：

// 输入：s = "google"
// 输出：[["g","o","o","g","l","e"],["g","oo","g","l","e"],["goog","l","e"]]
// 示例 2：

// 输入：s = "aab"
// 输出：[["a","a","b"],["aa","b"]]
// 示例 3：

// 输入：s = "a"
// 输出：[["a"]]
 

// 提示：

// 1 <= s.length <= 16
// s 仅由小写英文字母组成
 

// 注意：本题与主站 131 题相同： https://leetcode-cn.com/problems/palindrome-partitioning/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];
    // function isHuiwen(s, head, tail) {
    //     if (head + 1 > tail + 1) { // 递归结束条件：头指针下标 > 尾指针下标
    //         return s[head] === s[tail]; // 递归结束时，判断最后两个元素是否相等
    //     }
    //     if (s[head] === s[tail]) {
    //         return isHuiwen(s, head + 1, tail - 1);
    //     }
    //     else {
    //         return false;
    //     }
    // }
    const dp = [];
    for(let i = 0; i < s.length; i++) {
        dp[i] = new Array(s.length).fill(false);
        for(let j = 0; j <= i; j++) {
            if(s[i] === s[j] && (i - j <= 2 || dp[j + 1][i - 1])) {
                dp[j][i] = true;
            } else {
                dp[j][i] = false;
            }
        }
    }
    function backTrack(temp, start) {
        // 错误
        // if(temp.length === s.length) {
        //     res.push([...temp]);
        //     return;
        // }
        if(start >= s.length) {
            res.push([...temp]);
            return;
        }
        for(let i = start + 1; i <= s.length; i++) {
            let str = s.substring(start, i);
            if(dp[start][i - 1]) {
                temp.push(str);
                backTrack(temp, i);
                temp.pop();
            }
        }
    }
    backTrack([], 0);
    return res;
};