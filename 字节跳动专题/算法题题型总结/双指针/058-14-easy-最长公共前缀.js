/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs == null || !strs.length) return "";
  // 字符串数组中最短字符串的长度
  let minLength = Number.MAX_SAFE_INTEGER;
  for (let str of strs) {
    minLength = Math.min(minLength, str.length);
  }
  /* index之前是否是公共前缀  比方说strs = ["flower", "flow", "flight"] index=2，就是查看前2位 fl是否是公共前缀，结果返回true */
  const isCommonPrefix = (index) => {
    let str0 = strs[0].substring(0, index);
    let n = strs.length;
    for (let i = 1; i < n; i++) {
      // 判断每个字符串的长度为 index 的前缀是否相同
      let str = strs[i];
      if (str0 != str.substring(0, index)) return false;
    }
    return true;
  };
  // 左闭右开区间
  let low = 0,
    high = minLength;
  while (low < high) {
    // 为什么这里要用(high - low + 1)呢，因为如果不+1，那let strs = ["a"];就陷入死循环中了
    let mid = low + ((high - low + 1) >> 1);
    // 如果在前半段里面有公共前缀的话，再往后查找是否有符合条件的，因为我们现在要求的是最长公共前缀
    if (isCommonPrefix(mid)) low = mid;
    // 如果前半段不是公共前缀那我们就再缩小范围再查找，也就是在左半段的左半段里面查
    else high = mid - 1;
  }
  return strs[0].substring(0, low);
};