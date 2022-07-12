// ### [剑指 Offer 04\. 二维数组中的查找](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

// Difficulty: **在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。   示例: 现有矩阵 matrix 如下： [ [1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30] ] 给定 target = 5，返回 true。 给定 target = 20，返回 false。   限制： 0 <= n <= 1000 0 <= m <= 1000   注意：本题与主站 240 题相同：https://leetcode-cn.com/problems/search-a-2d-matrix-ii/ **


// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

// **示例:**

// 现有矩阵 matrix 如下：

// ```
// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// ```

// 给定 target = `5`，返回 `true`。

// 给定 target = `20`，返回 `false`。

// **限制：**

// `0 <= n <= 1000`

// `0 <= m <= 1000`

// **注意：**本题与主站 240 题相同：

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if(!matrix.length) return false;
    // 易错点：nm 和 ij 对应关系搞混
    // n 行 m 列
    let n = matrix.length - 1;
    let m = matrix[0].length - 1;
    let i = 0, j = m; // i 行 j 列
    while(i <= n && j >= 0) {
        if(matrix[i][j] === target) return true;
        else if(matrix[i][j] < target) i++;
        else j--;
    }
    return false;
};