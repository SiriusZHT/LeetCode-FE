// 剑指 Offer II 005. 单词长度的最大乘积Copy for Markdown
// 给定一个字符串数组 words，请计算当两个字符串 words[i] 和 words[j] 不包含相同字符时，它们长度的乘积的最大值。假设字符串中只包含英语的小写字母。如果没有不包含相同字符的一对字符串，返回 0。
// 
//  
// 
// 示例 1:
// 
// 输入: words = ["abcw","baz","foo","bar","fxyz","abcdef"]
// 输出: 16 
// 解释: 这两个单词为 "abcw", "fxyz"。它们不包含相同字符，且长度的乘积最大。
// 示例 2:
// 
// 输入: words = ["a","ab","abc","d","cd","bcd","abcd"]
// 输出: 4 
// 解释: 这两个单词为 "ab", "cd"。
// 示例 3:
// 
// 输入: words = ["a","aa","aaa","aaaa"]
// 输出: 0 
// 解释: 不存在这样的两个单词。

// 方法一：俩字符串挨个挨个查
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let max = 0;
    for (let i = 0 ; i < words.length - 1 ; i++) {
        for (let j = i + 1 ; j < words.length ; j++) {
            if (checkHas(words[i], words[j])) {
                if (words[i].length * words[j].length > max) max = words[i].length * words[j].length;
            }
        }
    }
    return max;
};

function checkHas (a, b) {
    for(let s of a) {
        if (b.indexOf(s) >= 0) return false;
    }
    for(let s of b) {
        if (a.indexOf(s) >= 0) return false;
    }
    return true;
};

// 方法二：哈希表
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  // 声明一个二维数组
  const flag = new Array(words.length)
    .fill(0)
    // 每一个数组的长度是26，因为题目中明确字符串中只包含英语的小写字母
    .map((x) => new Array(26).fill(0));
  for (let i = 0; i < words.length; i++) {
    for (let a of words[i]) {
      // 用哈希表记录出现在该字符串中的所有字符
      flag[i][a.charCodeAt(0) - "a".charCodeAt(0)] = true;
    }
  }
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let k = 0;
      // 从a到z判断某个字符是否在两个字符串对应的哈希表都出现了
      for (; k < 26; k++) {
        // 这里相当于26次布尔计算，算常量级别的
        if (flag[i][k] && flag[j][k]) {
          break;
        }
      }
      // 最多只需要在每个字符串对应的哈希表中查询26次就能判断两个字符串是否包含相同的字符
      if (k == 26) {
        let prod = words[i].length * words[j].length;
        result = Math.max(result, prod);
      }
    }
  }
  return result;
};

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/aseY1I/solution/jian-zhi-offer-zhuan-xiang-tu-po-ban-shu-qagw/

// 方法三：用整数二进制位记录字符串中出现的字符
// 前面的解法是用一个长度为26的布尔型数组记录字符串中出现的字符
// 可以将长度为26的布尔型数组用26个二进制的数位代表，二进制的0对应布尔值false,二进制1对应布尔值true
// 整数的二进制形式有32位，但只需要26位就能表示一个字符串中出现的字符
// 具体来说如果字符串中包含a，那么整数最右边的数位为1，如果字符串中包含b，那么整数倒数第2位为1，以此类推
// 如果两个字符串中包含相同的字符，那么它们对应的整数相同的某个数位都为1，这时相同的某个数位的与运算将为1

// 执行用时：68 ms, 在所有 JavaScript 提交中击败了99.12%的用户
// 内存消耗：44 MB, 在所有 JavaScript 提交中击败了47.71%的用户

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let flag = new Array(words.length).fill(0);
  for (let i = 0; i < words.length; i++) {
    for (let a of words[i]) {
      // 相当于a右移0位，b右移1位，c右移2位
      flag[i] |= 1 << (a.charCodeAt(0) - "a".charCodeAt(0));
    }
  }
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      // 如果两个整数flag[i]和flag[j]的与运算的结果为0，那么它们对应的字符串words[i]和words[j]一定没有相同的字符
      if ((flag[i] & flag[j]) == 0) {
        let prod = words[i].length * words[j].length;
        result = Math.max(result, prod);
      }
    }
  }
  return result;
};

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/aseY1I/solution/jian-zhi-offer-zhuan-xiang-tu-po-ban-shu-qagw/