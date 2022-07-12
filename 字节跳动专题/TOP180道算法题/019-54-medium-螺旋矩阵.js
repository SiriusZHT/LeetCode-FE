/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(!matrix.length) return [];
    const res = [];
    let left = 0,
        top = 0,
        right = matrix[0].length - 1,
        bottom = matrix.length - 1;
    let flag = 'right';
    // 结束条件！！！ 到中心点后越界的情况
    while(left <= right && top <= bottom) {
        switch(flag) {
            case 'right': {
                for(let i = left; i <= right; i++) {
                    res.push(matrix[top][i]);
                }
                top++;
                flag = 'down';
                break; // 每次记得 break 不然要触发其他 case
            }
            case 'down': {
                for(let i = top; i <= bottom; i++) {
                    res.push(matrix[i][right]);
                }
                right--;
                flag = 'left';
                break;
            }
            case 'left': {
                for(let i = right; i >= left; i--) {
                    res.push(matrix[bottom][i]);
                }
                bottom--;
                flag = 'up';
                break;
            }
            case 'up': {
                for(let i = bottom; i >= top; i--) {
                    res.push(matrix[i][left]);
                }
                left++;
                flag = 'right';
                break;
            }
            default: break;
        }
    }
    return res;
};