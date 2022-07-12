// 剑指 Offer II 079. 所有子集Copy for Markdown
// 给定一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// 示例 2：

// 输入：nums = [0]
// 输出：[[],[0]]

// 提示：

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// nums 中的所有元素 互不相同
 

// 注意：本题与主站 78 题相同： https://leetcode-cn.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if(!nums.length) return [];
    const res = [];
    function backTrack(temp, start) {
        res.push([...temp]);
        for(let i = start; i < nums.length; i++) {
            temp.push(nums[i]);
            backTrack(temp, i + 1);
            temp.pop();
        }
    }
    backTrack([], 0);
    return res;
};
