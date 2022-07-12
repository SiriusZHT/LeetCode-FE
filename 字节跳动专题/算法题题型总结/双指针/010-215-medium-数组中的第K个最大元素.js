// 215. 数组中的第K个最大元素
// 在长度为n的排序数组中，第k大的数字的下标是n-k
// 用快速排序的函数partition对数组分区，如果函数partition选取的中间值在分区之后的下标正好是n-k，分区后左边的的值都比中间值小，右边的值都比中间值大，即使整个数组不是排序的，中间值也肯定是第k大的数字
// 如果函数partition选取的中间值在分区之后的下标大于n-k，那么第k大的数字一定位于中间值的左侧，于是再对中间值的左侧的子数组分区
// 如果函数partition选择的中间值在分区之后的下标小于n-k，那么第k大的数字一定位于中间值的右侧，于是再对中间值的右侧的子数组分区

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 单边循环法
function partition(arr, startIndex, endIndex) {
  // 取第一个位置的元素作为基准元素（也可以选择随机位置）
  let pivot = arr[startIndex];
  // 设置一个mark指针指向数组起始位置 -- 最终  这个mark指针代表小于基准元素的区域边界
  let mark = startIndex;
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (arr[i] < pivot) {
      mark++;
      [arr[mark], arr[i]] = [arr[i], arr[mark]];
    }
  }
  arr[startIndex] = arr[mark];
  arr[mark] = pivot;
  return mark;
}
var findKthLargest = function (nums, k) {
  let targetIndex = nums.length - k;
  let start = 0,
    end = nums.length - 1;
  let index = partition(nums, start, end);
  while (index != targetIndex) {
    if (index > targetIndex) {
      end = index - 1;
    } else {
      start = index + 1;
    }
    index = partition(nums, start, end);
  }
  return nums[index];
};

