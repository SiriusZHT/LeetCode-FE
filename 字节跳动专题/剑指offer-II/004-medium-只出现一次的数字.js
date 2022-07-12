// 剑指 Offer II 004. 只出现一次的数字 Copy for Markdown
// 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。

// 示例 1：

// 输入：nums = [2,2,3,2]
// 输出：3
// 示例 2：

// 输入：nums = [0,1,0,1,0,1,100]
// 输出：100
/**
 * @param {number[]} nums
 * @return {number}
 */

// nlogn
function singleNumber(nums) {
    nums.sort((a, b) => {
        return a - b;
    })

    let i = 0;

    if (nums.length === 1) {
        return nums[i];
    }

    while (i < nums.length) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        }
        i += 3;
    }
}

// map 计数 n
var singleNumber = function (nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let c = nums[i]
        map.set(c, map.has(c) ? map.get(c) + 1 : 1)
    }
    let a
    map.forEach((value, key) => {
        if (value == 1) a = key
    })
    return a
}