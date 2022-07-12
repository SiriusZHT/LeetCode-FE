// 【两边往中间靠】
// 【字节004】5. 最长回文子串
// 给你一个字符串 s，找到 s 中最长的回文子串。
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const isPalindrome = (s) => {
        let left = 0, right = s.length - 1;
        while(left < right) {
            if(s[left++] !== s[right--]) return false;
        }
        return true;
    }

    let maxLen = 0, res = '';
    for(let i = 0; i <= s.length - 1; i++) {
        for(let j = i; j <= s.length - 1; j++) {
            if(isPalindrome(s.substring(i, j + 1))) {
                maxLen = Math.max(maxLen, j - i + 1);
                if(maxLen <= j - i + 1) res = s.substring(i, j + 1);
            }
        }
    }
    return res;
};

// 【中间往两边靠】
// 【字节004】5. 最长回文子串
// 给你一个字符串 s，找到 s 中最长的回文子串。
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s.length) return "";
    let maxLen = 1, start = 0;
    const helper = (l, r) => {
        while(l >= 0 && r <= s.length - 1 && (s[i] === s[r])) {
            let len = r - l + 1;
            if(len > maxLen) {
                maxLen = len;
                start = l;
            }
        }
        r++, l--;
    }
    // 中心散开
    for(let i = 0; i < s.length; i++) {
        // 单数中心点
        helper(i - 1, i + 1);
        // 双数中心点
        helper(i, i + 1);
    }
    return s.substr(start, maxLen);
};