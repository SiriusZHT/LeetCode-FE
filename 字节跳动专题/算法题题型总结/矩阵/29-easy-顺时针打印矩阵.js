// 剑指 Offer 29. 顺时针打印矩阵
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。



// 示例 1：

// 输入：matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// 输出：[1, 2, 3, 6, 9, 8, 7, 4, 5]
// 示例 2：

// 输入：matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
// 输出：[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix.length) {
        return [];
    }
    const res = [];
    let top = 0,
        bottom = matrix.length - 1,
        left = 0,
        right = matrix[top].length - 1;
    while (true) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        if (++top > bottom) break;
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        if (--right < left) break;
        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i]);
        }
        if (--bottom < top) break;
        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left]);
        }
        if (++left > right) break;
    }
    return res;
};

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix.length) {
        return [];
    }
    let top = 0,
        left = 0,
        bottom = matrix.length - 1,
        right = matrix[0].length - 1,
        direction = "right",
        result = [];

    while (left <= right && top <= bottom) {
        switch (direction) {
            case "right": {
                for (let i = left; i <= right; i++) {
                    result.push(matrix[top][i]);
                }
                top++;
                direction = "down";
                break;
            }
            case "down": {
                for (let i = top; i <= bottom; i++) {
                    result.push(matrix[i][right]);
                }
                right--;
                direction = "left";
                break;
            }
            case "left": {
                for (let i = right; i >= left; i--) {
                    result.push(matrix[bottom][i]);
                }
                bottom--;
                direction = "top";
                break;
            }
            case "top": {
                for (let i = bottom; i >= top; i--) {
                    result.push(matrix[i][left]);
                }
                left++;
                direction = "right";
                break;
            }
            default: {
                break;
            }
        }
    }
    return result;
};