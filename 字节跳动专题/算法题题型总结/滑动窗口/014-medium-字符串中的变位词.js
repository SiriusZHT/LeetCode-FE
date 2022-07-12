// 剑指 Offer II 014. 字符串中的变位词
// 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的某个变位词。

// 换句话说，第一个字符串的排列之一是第二个字符串的 子串 。

// 示例 1：

// 输入: s1 = "ab" s2 = "eidbaooo"
// 输出: True
// 解释: s2 包含 s1 的排列之一 ("ba").
// 示例 2：

// 输入: s1= "ab" s2 = "eidboaoo"
// 输出: False
 

// 提示：

// 1 <= s1.length, s2.length <= 104
// s1 和 s2 仅包含小写字母
 

// 注意：本题与主站 567 题相同： https://leetcode-cn.com/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
//书上解法
var checkInclusion = function(s1, s2) {
  const n1 = s1.length, n2 = s2.length;
  if(n2 < n1) return false;
  const counts = new Array(26).fill(0);
  const allZero = counts => {
    for(let count of counts){
      if(count != 0){
        return false;
      }
    }
    return true;
  }
  // 检查s2中 0 - n1 的情况
  for(let i = 0; i < n1; i++){
    counts[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    counts[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
  }
  if(allZero(counts)){
    return true;
  }
  // s1重开，检查 n1 - n2的情况
  for(let i = n1; i < n2; i++){
    counts[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    counts[s2[i - n1].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    if(allZero(counts)){
      return true;
    }
  }
  return false;
};

//滑动窗口
var checkInclusion = function (s1, s2) {
  const n1 = s1.length, n2 = s2.length;
  if (n2 < n1) return false;
  const S1 = new Array(26).fill(0);
  const S2 = new Array(26).fill(0);
  let l = 0, r = n1;
  for (let i = 0; i < n1; i++) {
    S1[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    S2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  while (r < n2) {
    if (S1.toString() === S2.toString()) {
      return true;
    }
    S2[s2[r++].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    S2[s2[l++].charCodeAt(0) - 'a'.charCodeAt(0)]--;
  }
  if (S1.toString() === S2.toString()) {
    return true;
  }
  return false;
};