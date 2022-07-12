// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 三角对角线交换 + 行内交换
var rotate = function(matrix) {
    function reverseRow(row) {
        let i = 0, j = row.length - 1;
        while(i < j) {
            [row[i], row[j]] = [row[j], row[i]];
            i++, j--;
        }
        return row;
    }
    let n = matrix.length;
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for(let i = 0; i < n; i++) {
        matrix[i] = reverseRow(matrix[i]);
    }
    return matrix;
};

// 不符合规范 但需要了解的方式
// 用另一个数组来存
var rotate = function(matrix) {
    let n = matrix.length;
    const arrs = new Array(n).fill(0).map(() => new Array(n).fill(0));
    
    for(let j = 0; j < n; j++) {
        for(let i = n - 1; i >= 0; i--) {
            arrs[j][n - i - 1] = matrix[i][j];
        }
    }
    return arrs;
};