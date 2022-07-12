// 剑指 Offer II 035. 最小时间差Copy for Markdown
// 给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。

 

// 示例 1：

// 输入：timePoints = ["23:59","00:00"]
// 输出：1
// 示例 2：

// 输入：timePoints = ["00:00","23:59","00:00"]
// 输出：0
 

// 提示：

// 2 <= timePoints <= 2 * 104
// timePoints[i] 格式为 "HH:MM"
 

// 注意：本题与主站 539 题相同： https://leetcode-cn.com/problems/minimum-time-difference/

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  // 1天有24小时，也就是1440分钟
  const size = 1440;
  // 由于一天中最多只有1440分钟，如果输入的时间数组的长度超过1440，那么至少有两个时间是相同的
  if (timePoints.length > size) {
    return 0;
  }
  // 数组下标为0的位置对应时间00:00，下标为1的位置对应时间00:01，以此类推，下标为1439的位置对应23:59
  let minuteFlags = new Array(size).fill(0);
  for (let time of timePoints) {
    let t = time.split(":");
    let min = (t[0] - 0) * 60 + (t[1] - 0);
    // 如果两个相同的时间，那么时间差肯定为0
    if (minuteFlags[min]) {
      return 0;
    }
    minuteFlags[min] = true;
  }
  let minDiff = minuteFlags.length - 1;
  // 上一个时间点
  let prev = -1;
  // 第一个时间点
  let first = minDiff;
  // 最后一个时间点
  let last = -1;
  // 相邻的两个为true的值表示对应的两个时间在输入时间数组timePoints中是相邻的
  // 由于数组的下标对应的是时间，因此两个时间之间的时间差就是它们在数组中对应的下标之差
  for (let i = 0; i < minuteFlags.length; i++) {
    if (minuteFlags[i]) {
      if (prev >= 0) {
        // 当前点减去上一个时间点的间隔
        minDiff = Math.min(i - prev, minDiff);
      }
      prev = i;
      first = Math.min(i, first);
      last = i;
    }
  }
  // 第1个时间点加上1440分钟表示第2天的同一时间，求它与最后一个时间的时间差
  minDiff = Math.min(first + minuteFlags.length - last, minDiff);
  return minDiff;
};