// 剑指 Offer II 040. 矩阵中最大的矩形Copy for Markdown
// 给定一个由 0 和 1 组成的矩阵 matrix ，找出只包含 1 的最大矩形，并返回其面积。

// 注意：此题 matrix 输入格式为一维 01 字符串数组。

// 示例 1：

// 输入：matrix = ["10100","10111","11111","10010"]
// 输出：6
// 解释：最大矩形如上图所示。
// 示例 2：

// 输入：matrix = []
// 输出：0
// 示例 3：

// 输入：matrix = ["0"]
// 输出：0
// 示例 4：

// 输入：matrix = ["1"]
// 输出：1
// 示例 5：

// 输入：matrix = ["00"]
// 输出：0
 

// 提示：

// rows == matrix.length
// cols == matrix[0].length
// 0 <= row, cols <= 200
// matrix[i][j] 为 '0' 或 '1'
 

// 注意：本题与主站 85 题相同（输入参数格式不同）： https://leetcode-cn.com/problems/maximal-rectangle/

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/PLYXKQ/solution/jiang-ju-zhen-zhuan-huan-cheng-zhi-fang-tkhqu/

// 二维数组:              每一层的高度直方图:
// [[1, 0, 1, 0, 0],  -> [1, 0, 1, 0, 0]
//  [0, 0, 1, 1, 1],  -> [0, 0, 2, 1, 1]
//  [1,,1,,1,,1,,1],  -> [1, 1, 3, 2, 2]
//  [1, 0, 0, 1, 0]]  -> [2, 0, 0, 3, 0]

/**
 * @param {string[]} matrix
 * @return {number}
 */
var largestRectangleArea = function (heights) {
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

var maximalRectangle = function (matrix) {
  if (matrix.length == 0 || matrix[0].length == 0) {
    return 0;
  }
  let heights = new Array(matrix[0].length).fill(0);
  let maxArea = 0;
  for (let row of matrix) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] == "0") {
        heights[i] = 0;
      } else {
        heights[i]++;
      }
    }
    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }
  return maxArea;
};


