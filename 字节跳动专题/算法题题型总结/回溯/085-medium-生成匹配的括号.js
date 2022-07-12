// 剑指 Offer II 085. 生成匹配的括号Copy for Markdown
// 正整数 n 代表生成括号的对数，请设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]
 

// 提示：

// 1 <= n <= 8
 

// 注意：本题与主站 22 题相同： https://leetcode-cn.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    function backTrack(temp, l, r) {
        if(l < 0 || r < 0) {
            return;
        }
        if(l === 0 && r === 0) {
            res.push(temp); // 不用拷贝
            return;
        }
        if(l > 0) {
            backTrack(temp + "(", l - 1, r);
        }
        if(l < r) {
            backTrack(temp + ")", l, r - 1);
        }
    }
    backTrack("", n, n);
    return res;
};

// 题解 by Sirius：用经典 BT 模板
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    function bt(temp, l, r) {
        if(l < 0 && r < 0) {
            return;
        }
        if(l === 0 && r === 0) {
            res.push(temp.join(''));
            return;
        }
        if(l > 0) {
            temp.push("(");
            bt(temp, l - 1, r);
            temp.pop();
        }
        // 易错点 l 和 r 写反
        if(l < r) {
            temp.push(")");
            bt(temp, l, r - 1);
            temp.pop();
        }
    }
    bt([], n, n);
    return res;
};