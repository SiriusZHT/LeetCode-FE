// 剑指 Offer II 016. 不含重复字符的最长子字符串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长连续子字符串 的长度。

 

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子字符串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子字符串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
// 示例 4:

// 输入: s = ""
// 输出: 0
 

// 提示：

// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成
 

// 注意：本题与主站 3 题相同： https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

// obj + 滑动窗口
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 窗口中的字符
  let window = {};
  // 左右指针
  let left = 0,
    right = 0;
  let res = 0;
  while (right < s.length) {
    // 即将移入窗口的字符
    let c = s[right];
    // 右移窗口
    right++;
    window[c] = (window[c] || 0) + 1;
    while (window[c] > 1) {
      let d = s[left];
      left++;
      window[d]--;
    }
    // 在这里更新答案
    res = Math.max(res, right - left);
  }
  return res;
};

// set + 滑动窗口
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set(); // has add .size get delete
    let i = 0, j = 0;
    let max = 0;
    while(i < s.length) {
        while(set.has(s[i])) {
            set.delete(s[j++]);
        }
        set.add(s[i++]);
        max = Math.max(set.size, max);
    }
    return max;
};