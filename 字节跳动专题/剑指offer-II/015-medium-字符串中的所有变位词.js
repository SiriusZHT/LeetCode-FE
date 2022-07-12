// 剑指 Offer II 015. 字符串中的所有变位词
// 给定两个字符串 s 和 p，找到 s 中所有 p 的 变位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

// 变位词 指字母相同，但排列不同的字符串。

 

// 示例 1:

// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的变位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的变位词。
//  示例 2:

// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的变位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的变位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的变位词。
 

// 提示:

// 1 <= s.length, p.length <= 3 * 104
// s 和 p 仅包含小写字母
 

// 注意：本题与主站 438 题相同： https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
//书上解法
var findAnagrams = function(s, p) {
  const n1 = s.length, n2 = p.length;
  const res = [];
  if(n1 < n2) return res;
  const counts = new Array(26).fill(0);
  const allZero = counts =>{
    for(let count of counts){
      if(count !== 0){
        return false;
      }
    }
    return true;
  }
  for(let i = 0; i < n2; i++){
    counts[p[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    counts[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
  }
  if(allZero(counts)){
    res.push(0);
  }
  for(let i = n2; i < n1; i++){
    counts[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    counts[s[i - n2].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    if(allZero(counts)){
      res.push(i - n2 + 1);
    }
  }
  return res;
};

//滑动窗口
var findAnagrams = function (s, p) {
  const n1 = s.length, n2 = p.length;
  const res = [];
  if (n1 < n2) return res;
  const S = new Array(26).fill(0);
  const P = new Array(26).fill(0);
  let l = 0, r = n2;
  for (let i = 0; i < n2; i++) {
    S[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    P[p[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  while (r < n1) {
    if (S.toString() === P.toString()) {
      res.push(l);
    }
    S[s[r++].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    S[s[l++].charCodeAt(0) - 'a'.charCodeAt(0)]--;
  }
  if (S.toString() === P.toString()) {
    res.push(l);
  }
  return res;
};