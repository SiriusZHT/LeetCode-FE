/**
 * @param {number[][]} grid
 * @return {number}
 */
// DFS 解法，进行累加
var maxAreaOfIsland = function(grid) {
    if(!grid.length) return 0;
    let row = grid.length - 1,
        col = grid[0].length - 1;
    function dfs(i, j) {
        if(i > row || j > col || i < 0 || j < 0 || grid[i][j] == 0) return 0;
        const arrs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        let sum = 1;
        grid[i][j] = 0;
        for(let arr of arrs) {
            sum += dfs(i + arr[0], j + arr[1]);
        }
        return sum;
    }
    
    let max = 0;
    for(let i = 0; i <= row; i++) {
        for(let j = 0; j <= col; j++) {
            max = Math.max(max, dfs(i, j));
        }
    }
    return max;
};

// BFS 解法
// 第一层 二维数组遍历
// 第二层 queue 中的所有 case 遍历
// 第三层 queue 中的当前层 的 case 遍历
// 第四层 上下左右 的 case 遍历 并 push 进 queue
var maxAreaOfIsland = function(grid) {
    if(!grid.length) return 0;
    let row = grid.length - 1,
        col = grid[0].length - 1;
    const arrs = [
        [0, 1], [0, -1], [1, 0], [-1, 0]
    ];
    let max = 0;
    for(let i = 0; i <= row; i++) {
        for(let j = 0; j <= col; j++) {
            if(grid[i][j] == 1) {
                const queue = [[i, j]];
                let sum = 0;
                while(queue.length) {
                    let len = queue.length;
                    for(let i = 0; i < len; i++) {
                        let [x, y] = queue.shift();
                        if(x > row || y > col || x < 0 || y < 0 || grid[x][y] == 0) continue;
                        grid[x][y] = 0;
                        sum++;
                        for(let arr of arrs) {
                            queue.push([x + arr[0], y + arr[1]]);
                        }
                    }
                }
                max = Math.max(max, sum);
            }
        }
    }
    return max;
};