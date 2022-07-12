// 剑指 Offer II 039. 直方图最大矩形面积Copy for Markdown
// 给定非负整数数组 heights ，数组中的数字用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

// 求在该柱状图中，能够勾勒出来的矩形的最大面积。

// 示例 1:

// 输入：heights = [2,1,5,6,2,3]
// 输出：10
// 解释：最大的矩形为图中红色区域，面积为 10
// 示例 2：

// 输入： heights = [2,4]
// 输出： 4
 

// 提示：

// 1 <= heights.length <=105
// 0 <= heights[i] <= 104
 

// 注意：本题与主站 84 题相同： https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
// 栈中保存的是柱子在数组中的下标，可以根据下标得到柱子的高度
// 确保保存在栈中的直方图的柿子的高度是递增排序的，假设从左到右逐一扫描数组中的每根柱子。如果当前柱子的高度大于位于栈顶的柱子的高度，那么将该柱子的下标入栈；否则将位于栈项的柱子的下标出栈，并且计算以位于栈项的柱子为顶的最大矩形面积
// 下面以 [2, 1, 5, 6, 2, 3] 为例说明，过程如图所示。
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  // 存放索引
  let stack = [-1];
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    // 当前柱子的高度小于位于栈顶的柱子的高度
    while (
      stack[stack.length - 1] != -1 &&
      heights[stack[stack.length - 1]] >= heights[i]
    ) {
      // 以栈顶的柱子为高度计算面积
      let height = heights[stack.pop()];
      let width = i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    // 当前柱子的高度大于位于栈顶的柱子的高度  入栈
    stack.push(i);
  }
  // 计算末尾
  while (stack[stack.length - 1] != -1) {
    let height = heights[stack.pop()];
    let width = heights.length - stack[stack.length - 1] - 1;
    maxArea = Math.max(maxArea, height * width);
  }
  return maxArea;
};