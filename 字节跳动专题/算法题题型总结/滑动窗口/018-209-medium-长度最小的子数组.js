// 只要 >= target 就符合条件
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0, right = 0, res = 0, min = Number.MAX_VALUE;
    while(right < nums.length) {
        res += nums[right++];
        while(left < right && res >= target) {
            res -= nums[left++];
            min = Math.min(min, right - left + 1);
        }
    }
    return min == Number.MAX_VALUE ? 0 : min;
};