// 剑指 Offer II 019. 最多删除一个字符得到回文
// 给定一个非空字符串 s，请判断如果 最多 从字符串中删除一个字符能否得到一个回文字符串。

 

// 示例 1:

// 输入: s = "aba"
// 输出: true
// 示例 2:

// 输入: s = "abca"
// 输出: true
// 解释: 可以删除 "c" 字符 或者 "b" 字符
// 示例 3:

// 输入: s = "abc"
// 输出: false

var validPalindrome = function (s) {
  function isPalindrome(left, right) {
    while (left < right) {
      if (s[left++] !== s[right--]) {
        return false;
      }
    }
    return true;
  }

  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      const result =
        isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
      return result;
    }
    left++;
    right--;
  }

  return true;
};
