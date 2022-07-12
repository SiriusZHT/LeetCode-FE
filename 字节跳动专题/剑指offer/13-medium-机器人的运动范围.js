// 剑指 Offer 13. 机器人的运动范围
// 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

 

// 示例 1：

// 输入：m = 2, n = 3, k = 1
// 输出：3
// 示例 2：

// 输入：m = 3, n = 1, k = 0
// 输出：1

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    function ijsum(i, j) {
        let sum = 0;
        while(i) {
            sum += (i % 10);
            i = Math.floor(i / 10);
        }
        while(j) {
            sum += (j % 10);
            j = Math.floor(j / 10);
        }
        return sum;
    }
    function dfs(i, j, k, m, n, flag) {
        if(i >= m || j >= n || ijsum(i, j) > k || flag[i][j]) return 0;
        flag[i][j] = true;
        return 1 + dfs(i, j + 1, k, m, n, flag) + dfs(i + 1, j, k, m, n, flag);
    }
    const flag = new Array(m).fill().map(item => new Array(n).fill(false));
    return dfs(0, 0, k, m, n, flag);
};