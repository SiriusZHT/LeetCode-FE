/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// dfs方法：用二维数组，二维就是层数，二维的一维就是层数中的值
// 每次 dfs 往下的时候就把层数 + 1 即可
var levelOrder = function(root) {
    const res = [];
    function dfs(root, depth) {
        if(!root) return;
        res[depth] ? res[depth].push(root.val) : res[depth] = [root.val];
        dfs(root.left, depth + 1);
        dfs(root.right, depth + 1);
    }
    dfs(root, 0);
    return res;
};

// bfs方法：每层记录子数组，遍历完就加到res里
var levelOrder = function(root) {
    if(!root) return [];
    const res = [];
    const queue = [root];
    while(queue.length) {
        let len = queue.length;
        const arr = new Array(len).fill(0);
        for(let i = 0; i < len; i++) {
            let cur = queue.shift();
            arr[i] = cur.val;
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        res.push(arr);
    }
    return res;
};