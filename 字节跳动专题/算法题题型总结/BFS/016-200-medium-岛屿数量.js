/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid.length) return 0;
    let arrs = [
        [0, 1], 
        [1, 0], 
        [-1, 0], 
        [0, -1] 
    ];
    function dfs(i, j) {
        if(i < 0 || 
           j < 0 || 
           i >= grid.length || 
           j >= grid[0].length || 
           grid[i][j] == '0') 
                return;
        
        grid[i][j] = '0';
        for(let arr of arrs) dfs(i + arr[0], j + arr[1]);
    }
    let count = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == '1') {
                count++;
                dfs(i, j);
            }
        }
    }
    return count;
};

// BFS 每次取出当前层的元素 push完该元素的所有情况 再遍历下一个元素
var numIslands = function(grid) {
    if(!grid.length) return 0;
    let arr = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ]
    let count = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == '1') {
                count++;
                const queue = [[i, j]];
                while(queue.length) {
                    let len = queue.length;
                    for(let num = 0; num < len; num++) {
                        let [row, col] = queue.shift();
                        if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] == '0') continue;
                        grid[row][col] = '0';
                        for(let i of arr) queue.push([row + i[0], col + i[1]]);
                    }
                }
            }
        }
    }
    return count;
};