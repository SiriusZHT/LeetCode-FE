// 【字节004】112. 路径总和
// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。
// 叶子节点 是指没有子节点的节点。
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
 * @param {number} targetSum
 * @return {boolean}
 */
// 深度优先遍历 每到一层递归前 减去当前节点值 最后一层判断是否减完为0
var hasPathSum = function(root, targetSum) {
    // 判断根节点为空的情况
    if(root === null) return false;
    // 如果走到叶子节点 判断 targetSum 有没有被减完
    if(root.left === null && root.right === null) return targetSum - root.val === 0;
    // 深度优先遍历 并 在每次遍历的时候 减去当前节点的值 看到叶子的时候有没有减完就行
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

// 广度优先遍历 每到下一层前 把当前层的值加给下一层 最后一层判断是否和targetSum相等
var hasPathSum = function(root, targetSum) {
    if(root === null) return false;
    const queue = [root];
    while(queue.length) {
        let size = queue.length;
        while(size--) {
            let cur = queue.shift();
            if(cur.left === null && cur.right === null && cur.val === targetSum) return true;
            if(cur.left !== null) {
                cur.left.val += cur.val;
                queue.push(cur.left);
            }
            if(cur.right !== null) {
                cur.right.val += cur.val;
                queue.push(cur.right);
            }
        }
    }
    return false;  
};