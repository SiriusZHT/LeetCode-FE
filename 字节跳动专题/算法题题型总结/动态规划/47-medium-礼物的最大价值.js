// 剑指 Offer 47. 礼物的最大价值Copy for Markdown
// 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

// 示例 1:

// 输入: 
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// 输出: 12
// 解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物


// 题目说明了每次向右或者向下移动一格，并且没有要求说不能修改传入的grid，为节省空间，我们在grid上直接修改
// 其实归结一句话，当前格子我们看从左边过来得到的值大还是从上面来得到的值更大，哪个值大就取哪个
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  if (grid == null || !grid.length) return 0;
  let rows = grid.length,
    cols = grid[0].length;

  for (let j = 1; j < cols; j++)
    // 第一行元素  只能从左边移动过来
    grid[0][j] += grid[0][j - 1];
  for (let j = 1; j < rows; j++)
    // 第一列元素 只能从右边移动过来
    grid[j][0] += grid[j - 1][0];

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      grid[i][j] += Math.max(grid[i][j - 1], grid[i - 1][j]);
    }
  }
  return grid[rows - 1][cols - 1];
};