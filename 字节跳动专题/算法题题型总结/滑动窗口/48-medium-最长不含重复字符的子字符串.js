// 剑指 Offer 48. 最长不含重复字符的子字符串
// 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

// 保证滑动窗口内不出现重复字符，求最大的滑动窗口的大小
// 具体滑动窗口的思路见图解滑动窗口：https://leetcode-cn.com/problems/minimum-window-substring/solution/hua-dong-chuang-kou-tong-yong-jie-ti-tao-9v69/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
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
    // if(window[c] === undefined) window[c] = 0 + 1
    // else window[c] = window[c] + 1;
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

