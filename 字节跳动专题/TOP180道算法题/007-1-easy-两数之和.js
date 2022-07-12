// 【字节007】
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    for(let i = 0; i < nums.length; i++) {
        let temp = target - nums[i];
        if(map[temp] !== undefined) {
            return [map[temp], i];
        } else {
            map[nums[i]] = i;
        }
    }
};
