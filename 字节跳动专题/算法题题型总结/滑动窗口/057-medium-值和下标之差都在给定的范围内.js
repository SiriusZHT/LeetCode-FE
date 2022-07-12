// 剑指 Offer II 057. 值和下标之差都在给定的范围内
// 给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j]) <= t ，同时又满足 abs(i - j) <= k 。

// 如果存在则返回 true，不存在返回 false。

 

// 示例 1：

// 输入：nums = [1,2,3,1], k = 3, t = 0
// 输出：true
// 示例 2：

// 输入：nums = [1,0,1,1], k = 1, t = 2
// 输出：true
// 示例 3：

// 输入：nums = [1,5,9,1,5,9], k = 2, t = 3
// 输出：false
 

// 提示：

// 0 <= nums.length <= 2 * 104
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 104
// 0 <= t <= 231 - 1
 

// 注意：本题与主站 220 题相同： https://leetcode-cn.com/problems/contains-duplicate-iii/

// 方法一：桶排序
// 求的是差的绝对值小于或等于t的数字，因此可以将数字放入若干大小为t+1的桶中

// 举例来说，将从0到t的数字放入编号为0的桶中，从t+1到2t+1的数字放入编号为1桶中，依此类推

// 如果两个数字被放入同人个桶中，那么它们的差的绝对值一定小于或等于t

// 具体逐一扫描数组中的数字，如果当前扫描的数字num，那么它将放入编号为id的桶中，如果这个桶中之前已经有数字，那么就找到两个差的绝对值小于或等于t的数字

// 如果桶中之前没有数字，则再判断编号为id-1和id-2的这两个相邻的桶中是否存在与num的差的绝对值小于或等于t的数字

// 因为其它桶中的数字与num的差的绝对值一定大于t，所以不需要判断其他的桶中是否有符合条件的数字
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  let buckets = new Map();
  let bucketSize = t + 1;
  const getBucketId = (num, bucketSize) => {
    return num >= 0
      ? Math.floor(num / bucketSize)
      : Math.floor((num + 1) / bucketSize) - 1;
  };
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let id = getBucketId(num, bucketSize);
    if (
      buckets.has(id) ||
      (buckets.has(id - 1) && buckets.get(id - 1) + t >= num) ||
      (buckets.has(id + 1) && buckets.get(id + 1) - t <= num)
    ) {
      return true;
    }
    buckets.set(id, num);
    if (i >= k) {
      buckets.delete(getBucketId(nums[i - k], bucketSize));
    }
  }
  return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  let buckets = new Map();
  let bucketSize = t + 1;
  const getBucketId = (num, bucketSize) => {
    return num >= 0
      ? Math.floor(num / bucketSize)
      : Math.floor((num + 1) / bucketSize) - 1;
  };
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let id = getBucketId(num, bucketSize);
    if (
      buckets.has(id) ||
      (buckets.has(id - 1) && Math.abs(num - buckets.get(id - 1)) <= t) ||
      (buckets.has(id + 1) && Math.abs(num - buckets.get(id + 1)) <= t)
    ) {
      return true;
    }
    buckets.set(id, num);
    if (i >= k) {
      buckets.delete(getBucketId(nums[i - k], bucketSize));
    }
  }
  return false;
};

// 方法二：滑动窗口
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  let len = nums.length;
  let start, end = 1;
  let ret = false;
  if (k === 0) return ret;
  while (end < len && !ret) {
    let _min = end - k < 0 ? 0 : end - k; // 找到end往前k范围内的最小下标
    start = end - 1; 
    while (start >= _min) {
      if (Math.abs(nums[end] - nums[start]) <= t) {
        ret = true;
        break;
      }
      start--;
    }
    end++;
  }
  return ret;
};
