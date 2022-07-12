/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(!nums.length) return;
    let flag = 1;
    for(let i = nums.length - 1; i >= 0; i--) {
        for(let j = nums.length - 1; j > i; j--) {
            if(nums[i] < nums[j]) {
                flag = 0;
                [nums[i], nums[j]] = [nums[j], nums[i]];
                nums = nums.slice(0, i + 1).concat(nums.slice(i + 1).sort((a, b) => a - b));
                return nums;
            }
        }
    }
    flag && nums.sort((a, b) => a - b);
    return nums;
};

let arr = [1, 3, 2];
let arr2 = nextPermutation(arr);
console.log(arr); // [2, 3, 1]
console.log(arr2); // [2, 1, 3]