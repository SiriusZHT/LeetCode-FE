// 剑指 Offer II 013. 二维子矩阵的和
// 给定一个二维矩阵 matrix，以下类型的多个请求：

// 计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。
// 实现 NumMatrix 类：

// NumMatrix(int[][] matrix) 给定整数矩阵 matrix 进行初始化
// int sumRegion(int row1, int col1, int row2, int col2) 返回左上角 (row1, col1) 、右下角 (row2, col2) 的子矩阵的元素总和。

// 输入: 
// ["NumMatrix","sumRegion","sumRegion","sumRegion"]
// [[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]
// 输出: 
// [null, 8, 11, 12]

// 解释:
// NumMatrix numMatrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]]);
// numMatrix.sumRegion(2, 1, 4, 3); // return 8 (红色矩形框的元素总和)
// numMatrix.sumRegion(1, 1, 2, 2); // return 11 (绿色矩形框的元素总和)
// numMatrix.sumRegion(1, 2, 2, 4); // return 12 (蓝色矩形框的元素总和)

/**
 * @param {number[][]} matrix
 */
let sum;
var NumMatrix = function(matrix) {
  // 非空判断处理
  if (matrix == null || !matrix.length || !matrix[0].length) {
    return;
  }
  // 初始化前缀和数组
  // 如果输入矩阵的行数和列数分别是m和n，那么sum辅助矩阵的行数和列数分别是m+1和n+1，只是为了简化代码逻辑
  // sum 的 i 行 j 列 表示 matrix 的 i - 1行 x j - 1列 的矩阵范围的前缀和
  // 为什么要这么表示？ 因为 sum[0][i] sum[i][0] 无效 不能组成矩阵
  sum = new Array(matrix.length + 1)
    .fill(0)
    .map(() => new Array(matrix[0].length + 1).fill(0));
  for (let i = 0; i < matrix.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < matrix[0].length; j++) {
      // 初始化的时候是 rowSum 负责在第二层循环的时候 进行 j 的累加，以计算到当前这一项的行的和 也就是 每一行的前缀和
      rowSum += matrix[i][j] - 0;
      // 因为前面只计算了 rowSum 当前行的前缀和，要算整个矩阵的点缀和，就要加上上一层 （i + 1 - 1 = i） 行的当前列（j + 1）的状态
      sum[i + 1][j + 1] = sum[i][j + 1] + rowSum;
    }
    console.log(sum);
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  // 公式sum[r2][c2] + sum[r1 - 1][c2] - sum[r2][c1 - 1] + sum[r1 - 1][c1 - 1];
  // 来求解左上角坐标(r1,c1)右下角(r2,c2)的子矩阵的数字之和，
  // 由于坐标r1或c1有可能等于0，因此r1-1或c1-1可能是负数，
  // 所以在辅助矩阵的最上面增加一行，最左边增加一列，这样就不必担心出现数组下标-1的的情形
  return (
    sum[row2 + 1][col2 + 1] -
    sum[row1][col2 + 1] -
    sum[row2 + 1][col1] +
    sum[row1][col1]
  );
};

// 初始化前缀和数组
// 如果输入矩阵的行数和列数分别是m和n，那么sum辅助矩阵的行数和列数分别是m+1和n+1，只是为了简化代码逻辑

// NumMatrix([[3,0,1,4,2],
//            [5,6,3,2,1],
//            [1,2,0,1,5],
//            [4,1,0,1,7],
//            [1,0,3,0,5]])

// 打印第一层for循环 也就是列的迭代 结果如下：
// 可以观察到
// sum = new Array(matrix.length + 1)
//     .fill(0)
//     .map(() => new Array(matrix[0].length + 1).fill(0));
// 1. sum 的 i 行 j 列 表示 matrix 的 i - 1行 x j - 1列 的矩阵范围的前缀和
// 为什么要这么表示？ 因为 sum[0][i] sum[i][0] 无效 不能组成矩阵

// "rowSum += matrix[i][j] - 0;"
// 2. 初始化的时候是 rowSum 负责在第二层循环的时候 进行 j 的累加，以计算到当前这一项的行的和 也就是 每一行的前缀和

// "sum[i + 1][j + 1] = sum[i][j + 1] + rowSum;"
// 3. 因为前面只计算了 rowSum 当前行的前缀和，要算整个矩阵的点缀和，就要加上上一层 （i + 1 - 1 = i） 行的当前列（j + 1）的状态

// [
//   [ 0, 0, 0, 0, 0, 0 ],
//   [ 0, 3, 3, 4, 8, 10 ],
//   [ 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0 ]
// ]
// [
//   [ 0, 0, 0, 0, 0, 0 ],
//   [ 0, 3, 3, 4, 8, 10 ],
//   [ 0, 8, 14, 18, 24, 27 ],
//   [ 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0 ]
// ]
// [
//   [ 0, 0, 0, 0, 0, 0 ],
//   [ 0, 3, 3, 4, 8, 10 ],
//   [ 0, 8, 14, 18, 24, 27 ],
//   [ 0, 9, 17, 21, 28, 36 ],
//   [ 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0 ]
// ]
// [
//   [ 0, 0, 0, 0, 0, 0 ],
//   [ 0, 3, 3, 4, 8, 10 ],
//   [ 0, 8, 14, 18, 24, 27 ],
//   [ 0, 9, 17, 21, 28, 36 ],
//   [ 0, 13, 22, 26, 34, 49 ],
//   [ 0, 0, 0, 0, 0, 0 ]
// ]
// [
//   [ 0, 0, 0, 0, 0, 0 ],
//   [ 0, 3, 3, 4, 8, 10 ],
//   [ 0, 8, 14, 18, 24, 27 ],
//   [ 0, 9, 17, 21, 28, 36 ],
//   [ 0, 13, 22, 26, 34, 49 ],
//   [ 0, 14, 23, 30, 38, 58 ]
// ]