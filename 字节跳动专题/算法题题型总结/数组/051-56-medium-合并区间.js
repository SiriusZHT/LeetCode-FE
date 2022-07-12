/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 判断边界条件
  if (intervals.length < 2) {
    return intervals;
  }
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  let cur = intervals[0];
  let result = [];
  // 按照第一位排序
  // 重合条件： 当前合并后的区间 的右边界 大于 下一个的左边界
  // 合并方式： 将当前的右边界扩充
  // 扩充方式： 当前区间的右边界 和 下一个的右边界 哪个大 就合并哪个
  for (let interval of intervals) {
    if (cur[1] >= interval[0]) {
      cur[1] = Math.max(interval[1], cur[1]);
    } else {
      result.push(cur);
      cur = interval;
    }
  }
  // 跳出循环之后的条件
  if (cur.length) {
    result.push(cur);
  }
  return result;
};