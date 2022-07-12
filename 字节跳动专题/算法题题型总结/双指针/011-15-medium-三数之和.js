// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 首尾双指针
var threeSum = function(nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length - 2; i++) {
        // 去重复
        if(i !== 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let j = i + 1, k = nums.length - 1;
        while(j < k) {
            if(nums[i] + nums[j] + nums[k] === 0) {
                res.push([nums[i], nums[j++], nums[k--]]);
                // 两边缩圈
                while(j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
                while(j < k && nums[k] === nums[k + 1]) {
                    k--;
                }
            } else if(nums[i] + nums[j] + nums[k] > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return res;
};