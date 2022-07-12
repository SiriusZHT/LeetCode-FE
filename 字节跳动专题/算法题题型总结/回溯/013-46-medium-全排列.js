// 【字节013】46. 全排列
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(!nums.length) return [];
    const res = [];
    function bt(temp) {
        if(temp.length === nums.length) {
            res.push([...temp]);
        }
        for(let i = 0; i < nums.length; i++) {
            if(temp.indexOf(nums[i]) !== -1) continue;
            temp.push(nums[i]);
            bt(temp);
            temp.pop();
        }
    }
    bt([]);
    return res;
};