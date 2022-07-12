// 【字节008】129. 求根节点到叶节点数字之和
// 给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
// 每条从根节点到叶节点的路径都代表一个数字：
// 例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
// 计算从根节点到叶节点生成的 所有数字之和 。
// 叶节点 是指没有子节点的节点。
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
 * @return {number}
 */
var sumNumbers = function(root) {
    const helper = (root, path) => {
        if(!root) return 0;
        // 每到一层就进位操作
        path = path * 10 + root.val;
        // 到达叶子节点 返回路径和
        if(!root.left && !root.right) return path;
        // 根节点左路径 + 根节点右路径
        return helper(root.left, path) + helper(root.right, path);
    }
    return helper(root, 0);
};
