/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 冒泡排序
// 外层循环i 每次 都 存 最小值
// 内层循环j 每次 都 找 最小值
// 怎么找？遍历 j -> i
var sortArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = Infinity;
    let minIndex;
    for (j = i; j < nums.length; j++) {
      if (nums[j] < min) {
        min = nums[j];
        minIndex = j;
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
  return nums;
};

// 快速排序 
// 随机找基准元素 一般是 Math.floor(nums.length / 2); 位置
// 进行 基准元素 左边👈🏻 👉🏻右边 的分割 小于基准元素的放👈🏻 大的放👉🏻
// 通过递归，从最底层 也就是 只有2个元素 的数组开始 挨个 连接 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length <= 1) return nums;
    let pivotIndex = Math.floor(nums.length / 2);
    const left = [];
    const right = [];
    for(let i = 0; i < nums.length; i++) {
        if(i === pivotIndex) continue;
        if(nums[i] < nums[pivotIndex]) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    return sortArray(left).concat([nums[pivotIndex]], sortArray(right));
}

// 归并排序
// 思路和 两个排序链表合并 那道题类似
// case1：只有2个，那么直接比较，谁小谁先push到arr里
// case2：有 4 个，其中，通过递归，已经知道，2+2都是升序的了，
//       按照两个排序链表合并思路，一直等两个数组任何一个遍历完，while (left.length && right.length)，
//       如果还有剩余，while (left.length)

// 怎么递归，还是每次进行 / 2 的分割操作
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length <= 1) return nums;
    let mid = Math.floor(nums.length / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid);
    return merge(sortArray(left), sortArray(right));
}

var merge = function(arr1, arr2) {
    const res = [];
    while(arr1.length && arr2.length) {
        if(arr1[0] <= arr2[0]) {
            res.push(arr1.shift());
        } else {
            res.push(arr2.shift());
        }
    }
    arr1.length && res.push(...arr1);
    arr2.length && res.push(...arr2);
    return res;
}