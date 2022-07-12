/**
 * @param {number[]} nums
 * @return {number}
 */
// DP 
var lengthOfLIS = function(nums) {
    if(!nums.length) return 0;
    // 某 len 之前的 最大严格递增子序列的长度
    const dp = new Array(nums.length).fill(1);
    let max = 1;
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
            max = Math.max(dp[i], max);
        }
    }
    return max;
};

// 二分
var lengthOfLIS = function(nums) {

  // 每堆的堆顶
  const top = [];
  // 牌堆数初始化为0
  let piles = 0;
  for (let i = 0; i < nums.length; i++) {
    // 要处理的扑克牌
    let poker = nums[i];
    // 左堆和最右堆进行二分搜索，因为堆顶是有序排的，最终找到该牌要插入的堆
    let left = 0,
      right = piles;
    //搜索区间是左闭右开
    while (left < right) {
      let mid = left + ((right - left) >> 1);
      if (top[mid] > poker) {
        right = mid;
      } else if (top[mid] < poker) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    //  没找到合适的牌堆，新建一堆
    if (left == piles) piles++;
    // 把这张牌放到堆顶
    top[left] = poker;
  }
  return piles;
};