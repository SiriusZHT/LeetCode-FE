// 38 medium 字符串的排列

// 输入一个字符串，打印出该字符串中字符的所有排列。
// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
// 
// 示例:
// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]
// 
// 限制：
// 1 <= s 的长度 <= 8

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  const res = [],
    vis = [];
  const n = s.length;
  // 对s排序，保证相同的字符相邻
  const arr = Array.from(s).sort();
  const backtrack = (startIndex, perm) => {
    if (startIndex == n) return res.push(perm.join(""));
    for (let i = 0; i < n; i++) {
      // 如果已经填过了，或者前一个没有填并且当前这一个跟前一个相同
      // 这个的本质是限制每次填入的字符一定是这个字符所在重复字符集合中从左往右第一个未被填入的字符」
      // 所以才会有下面的判断条件 如果上一个没有填入而当前字符跟上一个字符相等，那也不能填入（保证了对于重复的字符，我们一定是从左往右依次填入到空位中的）
      if (vis[i] || (i > 0 && !vis[i - 1] && arr[i - 1] == arr[i])) {
        continue;
      }
      // 标记当前字符已填入
      vis[i] = true;
      perm.push(arr[i]);
      backtrack(startIndex + 1, perm);
      // 回溯后，撤销该空位及标记
      perm.pop();
      vis[i] = false;
    }
  };
  backtrack(0, []);
  return res;
};

var permutation = (s) => {
    let vis = [];
    let res = [];
    let dfs = (step, curP) => {
        if (step === s.length) {
            if (res.indexOf(curP) === -1) {
                res.push(curP);
            }
            return;
        }
        for (let i = 0; i < s.length; i++) {
            if (vis[i] === true) continue;
            vis[i] = true;
            dfs(step + 1, curP + s[i]);
            vis[i] = false;
        }
    }
    dfs(0, '');
    return res;
}