/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const arr = new Array(m);
    arr[0] = new Array(n).fill(1);
    for(let i = 1; i < m; i++) {
        arr[i] = new Array(n).fill(0);
        for(let j = 0; j < n; j++) {
            arr[i][j] = !j ? 1 : 0;
        }
    }
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
        }
    }
    return arr[m - 1][n - 1];
};