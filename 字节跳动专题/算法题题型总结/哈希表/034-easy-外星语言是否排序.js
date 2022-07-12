// 剑指 Offer II 034. 外星语言是否排序Copy for Markdown
// 某种外星语也使用英文小写字母，但可能顺序 order 不同。字母表的顺序（order）是一些小写字母的排列。

// 给定一组用外星语书写的单词 words，以及其字母表的顺序 order，只有当给定的单词在这种外星语中按字典序排列时，返回 true；否则，返回 false。

 

// 示例 1：

// 输入：words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// 输出：true
// 解释：在该语言的字母表中，'h' 位于 'l' 之前，所以单词序列是按字典序排列的。
// 示例 2：

// 输入：words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// 输出：false
// 解释：在该语言的字母表中，'d' 位于 'l' 之后，那么 words[0] > words[1]，因此单词序列不是按字典序排列的。
// 示例 3：

// 输入：words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// 输出：false
// 解释：当前三个字符 "app" 匹配时，第二个字符串相对短一些，然后根据词典编纂规则 "apple" > "app"，因为 'l' > '∅'，其中 '∅' 是空白字符，定义为比任何其他字符都小（更多信息）。
 

// 提示：

// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// order.length == 26
// 在 words[i] 和 order 中的所有字符都是英文小写字母。
 

// 注意：本题与主站 953 题相同： https://leetcode-cn.com/problems/verifying-an-alien-dictionary/


/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  // 哈希表orderArray中的键为字母表的每个字母，而值为字母在字母表order中的顺序
  let orderArray = new Array(26).fill(0);
  for (let i = 0; i < order.length; i++) {
    orderArray[order.charCodeAt(i) - "a".charCodeAt(0)] = i;
  }
  // 判断输入的两个单词是否按照字母表order中的顺序排序
  const isSort = (s1, s2, order) => {
    let i = 0;
    for (; i < s1.length && i < s2.length; i++) {
      let ch1 = s1.charCodeAt(i) - "a".charCodeAt(0);
      let ch2 = s2.charCodeAt(i) - "a".charCodeAt(0);
      // 比较两个字母在字母表order中的位置
      if (order[ch1] < order[ch2]) {
        return true;
      } else if (order[ch1] > order[ch2]) {
        return false;
      }
    }
    // 如果没有找到不相同的字母，那么短的单词在排序的时候应该排在前面
    return i == s1.length;
  };
  // orderArray记录了字母表order中每个字母的位置
  for (let i = 0; i < words.length - 1; i++) {
    if (!isSort(words[i], words[i + 1], orderArray)) {
      return false;
    }
  }
  return true;
}