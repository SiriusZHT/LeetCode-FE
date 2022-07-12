// 【字节001】3. 无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    const arr = [];
    for(let i of s) {
        // 要 push 进去，先要让整体不能有重复
        while(arr.indexOf(i) !== -1) {
            arr.shift();
        }
        arr.push(i);
        maxLen = maxLen > arr.length ? maxLen : arr.length;
    }
    return maxLen;
};


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

