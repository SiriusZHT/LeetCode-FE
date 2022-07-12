// 剑指 Offer 12. 矩阵中的路径
// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

// 例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。

// 示例 1：

// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true
// 示例 2：

// 输入：board = [["a","b"],["c","d"]], word = "abcd"
// 输出：false

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
//  思路其实很简单，假设题目要求我们从网格左上角开始，有上下左右四个方向可以走，是否有一条路径刚好等于 word，我们只需要在每个格子做出判断，

// 如果当前的格子不符合要求(字母不相等，或者走到了网格外)，可以直接返回 false，剪枝
// 如果当前格子符合题解要求，我们就继续往上下左右四个方向的格子走，只要有一个方向返回 true 我们就找到了题解
// 但题目还有一个额外的要求，就是每个格子只能用一次，所以我们需要记录已经走过的格子。这一步可以用一个和 board 一比一的二维数组来记录，也可以直接修改 board 网格，把走过的格子用占位符替换，然后在回溯的时候再恢复。

// 再来就是，题目并没有规定起点，所以我们得每个格子都作为起点试一遍。

var exist = function (board, word) {
    // 方向
    const offsets = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    // 每一项传索引到dfs里面走 只要有一个通过了就true
    // some 最里面的返回true直接影响最外面的true
    return board.some((row, x) => row.some((cell, y) => dfs(x, y, 0)));

    // ********************************
    
    function dfs(x, y, s) {
        if (s === word.length) return true;
        // 边界条件 不越界
        if (s > word.length || outsideBoard(x, y)) return false;
        // 不等就直接返回
        if (board[x][y] !== word[s]) return false;
        // 走过了的就直接 - 代替
        const char = board[x][y];
        board[x][y] = '-';
        // 继续往下走
        // some: 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
        const res = offsets.some(([ox, oy]) => dfs(x + ox, y + oy, s + 1));
        // 回溯的时候修复 -
        board[x][y] = char;
        return res;
    }

    function outsideBoard(x, y) {
        return x < 0 || x >= board.length || y < 0 || y >= board[0].length;
    }
};
