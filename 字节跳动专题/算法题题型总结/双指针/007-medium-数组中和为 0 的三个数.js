// 剑指 Offer II 007. 数组中和为 0 的三个数Copy for Markdown
// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a ，b ，c ，使得 a + b + c = 0 ？请找出所有和为 0 且 不重复 的三元组。

// 示例 1：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 示例 2：

// 输入：nums = []
// 输出：[]
// 示例 3：

// 输入：nums = [0]
// 输出：[]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(!nums.length) return [];
    nums.sort((a, b) => a - b);
    const res = [];
    for(let i = 0; i < nums.length - 2; i++) {
        // 细节点 跳过重复元素
        if(i !== 0 && nums[i] === nums[i - 1]) {
            continue;
        }
       let l = i + 1, r = nums.length - 1;
       while(l < r) {
           if(nums[i] + nums[l] + nums[r] === 0) {
               // 
                res.push([nums[i], nums[l++], nums[r--]]);
                while(nums[l] === nums[l - 1] && l < r) {
                    l++;
                }
                while(nums[r] === nums[r + 1] && l < r) {
                    r--;
                }
           } else if(nums[i] + nums[l] + nums[r] < 0) {
               l++;
           } else {
               r--;
           }
       }
    }
    return res;
};