// 剑指 Offer II 084. 含有重复元素集合的全排列 Copy for Markdown
// 给定一个可包含重复数字的整数集合 nums ，按任意顺序 返回它所有不重复的全排列。

 

// 示例 1：

// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// 示例 2：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 

// 提示：

// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10
 

// 注意：本题与主站 47 题相同： https://leetcode-cn.com/problems/permutations-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const res = [];
    const judge = new Array(nums.length).fill(false);
    nums.sort((a, b) => a - b);
    
    const bt = (temp) => {
        if(temp.length === nums.length) {
            res.push([...temp]);
            return;
        }
        for(let i = 0; i < nums.length; i++) {
            // 易错点：!judge[i - 1] 也要写上
            // 易错点：continue 而不是 break
            // 如果不写下面的判断 比如 1 1 2，那么会出现两次 1 1 2，因为一层可以选 两个重复的 1，等于是 push 了两个相同（但意义不同）的 temp
            if(judge[i] || (i !== 0 && nums[i] === nums[i - 1] && !judge[i - 1])) continue;
            // 满足 不重复 && 未使用 的条件 可以 push 到缓存数组中进行下一层
            temp.push(nums[i]);
            // push 之后一定要将 「表示当前项有没有使用」的缓存数组的当前项 同步设置为 true 使用过
            judge[i] = true;

            bt(temp);

            temp.pop();
            judge[i] = false;
        }
    }
    // 这里不用 index 的原因是因为 全排列 不用从 start 开始 而是从 0 开始
    bt([]);
    return res;
};