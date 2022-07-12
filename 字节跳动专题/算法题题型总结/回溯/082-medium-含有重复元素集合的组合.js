// 剑指 Offer II 082. 含有重复元素集合的组合Copy for Markdown
// 给定一个可能有重复数字的整数数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的每个数字在每个组合中只能使用一次，解集不能包含重复的组合。 

// 示例 1:

// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 输出:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// 示例 2:

// 输入: candidates = [2,5,2,1,2], target = 5,
// 输出:
// [
// [1,2,2],
// [5]
// ]
 

// 提示:

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30
 

// 注意：本题与主站 40 题相同： https://leetcode-cn.com/problems/combination-sum-ii/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const res = [];
    candidates.sort((a, b) => a - b);
    function backTrack(temp, start, target) {
        if(target < 0) {
            return;
        }
        if(target === 0) {
            res.push([...temp]);
            return;
        }
        for(let i = start; i < candidates.length; i++) {
            if(i !== start && candidates[i] === candidates[i - 1]) {
                continue;
            }
            temp.push(candidates[i]);
            backTrack(temp, i + 1, target - candidates[i]);
            temp.pop();
        }
    }
    backTrack([], 0, target);
    return res;
};