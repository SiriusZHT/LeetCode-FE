// 剑指 Offer II 018. 有效的回文Copy for Markdown
// 给定一个字符串 s ，验证 s 是否是 回文串 ，只考虑字母和数字字符，可以忽略字母的大小写。

// 本题中，将空字符串定义为有效的 回文串 。

 

// 示例 1:

// 输入: s = "A man, a plan, a canal: Panama"
// 输出: true
// 解释："amanaplanacanalpanama" 是回文串
// 示例 2:

// 输入: s = "race a car"
// 输出: false
// 解释："raceacar" 不是回文串
 

// 提示：

// 1 <= s.length <= 2 * 105
// 字符串 s 由 ASCII 字符组成
 

// 注意：本题与主站 125 题相同： https://leetcode-cn.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[\W_]/g, "");
    // \W表示除英文、数字、中文、下划线_以外的所有特殊符号
    // s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
    if(s.length < 2){
        return true;
    }
    let left = 0;
    let right = s.length - 1;
    while(left < right){
        if(s[left++] !== s[right--]){
            return false;
        }
    }
    return true;
};
