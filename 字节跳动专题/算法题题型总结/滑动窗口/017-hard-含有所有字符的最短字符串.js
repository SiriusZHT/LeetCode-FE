// 剑指 Offer II 017. 含有所有字符的最短字符串
// 给定两个字符串 s 和 t 。返回 s 中包含 t 的所有字符的最短子字符串。如果 s 中不存在符合条件的子字符串，则返回空字符串 "" 。

// 如果 s 中存在多个符合条件的子字符串，返回任意一个。

 

// 注意： 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。

 

// 示例 1：

// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC" 
// 解释：最短子字符串 "BANC" 包含了字符串 t 的所有字符 'A'、'B'、'C'
// 示例 2：

// 输入：s = "a", t = "a"
// 输出："a"
// 示例 3：

// 输入：s = "a", t = "aa"
// 输出：""
// 解释：t 中两个字符 'a' 均应包含在 s 的子串中，因此没有符合条件的子字符串，返回空字符串。
 

// 提示：

// 1 <= s.length, t.length <= 105
// s 和 t 由英文字母组成
 

// 进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？

 

// 注意：本题与主站 76 题相似（本题答案不唯一）：https://leetcode-cn.com/problems/minimum-window-substring/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  // 需要的
  let need = {};
  // 窗口中的字符
  let window = {};
  for (let a of t) {
    // 统计需要的字符
    need[a] = (need[a] || 0) + 1;
  }
  // 左右指针
  let left = 0,
    right = 0;
  let valid = 0;
  // 最小覆盖子串的起始索引及长度
  let start = 0,
    len = Number.MAX_VALUE;
  while (right < s.length) {
    // 即将移入窗口的字符
    let c = s[right];
    // 右移窗口
    right++;
    if (need[c]) {
      // 当前字符在需要的字符中，则更新当前窗口统计
      window[c] = (window[c] || 0) + 1;
      if (window[c] == need[c]) {
        // 当前窗口和需要的字符匹配时，验证数量增加1
        valid++;
      }
    }
    // 当验证数量与需要的字符个数一致时，就应该收缩窗口了
    while (valid == Object.keys(need).length) {
      // 更新最小覆盖子串
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      //即将移出窗口的字符
      let d = s[left];
      // 左移窗口
      left++;
      if (need[d]) {
        if (window[d] == need[d]) {
          valid--;
        }
        window[d]--;
      }
    }
  }
  return len == Number.MAX_VALUE ? "" : s.substr(start, len);
};