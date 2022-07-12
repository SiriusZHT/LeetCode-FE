// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
/**
 * @param {character[][]} matrix
 * @return {number}
 */
// DFS 不剪枝 就要 超时
var maximalSquare = function(matrix) {
    let row = matrix.length, col = matrix[0].length;
    let max = Number.MIN_VALUE;
    const larger = new Array(row).fill().map(() => new Array(col).fill(0));
    function helper(i, j) {
        if(i >= row || j >= col || matrix[i][j] == 0) {
            return 0;
        }
        if(larger[i][j] !== 0) {
            return larger[i][j];
        }
        let down = helper(i + 1, j);
        let right = helper(i, j + 1);
        let rd = helper(i + 1, j + 1);
        larger[i][j] = 1 + Math.min(down, right, rd);
        return larger[i][j];
    }
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(matrix[i][j] == 1) {
                max = Math.max(helper(i, j), max);
            }
        }
    }
    return max * max;
};

// DP
var maximalSquare = function(matrix) {
    let row = matrix.length, col = matrix[0].length;
    const dp = new Array(row).fill().map(() => new Array(col).fill(0));
    let max = Number.MIN_VALUE;
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++){
            if(matrix[i][j] == '1') {
                if(i == 0 || j == 0) dp[i][j] = 1;
                else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                max = Math.max(max, dp[i][j]);
            }
        }
    }
    return max * max;
};