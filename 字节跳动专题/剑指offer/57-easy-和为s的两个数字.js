/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let l = 0, r = nums.length - 1;
    while(l < r){
        if(nums[l] + nums[r] > target){
            r--;
        } else if(nums[l] + nums[r] < target){
            l++;
        } else {
            return [nums[l], nums[r]];
        }
    }
    return [];
};