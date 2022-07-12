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
var maxDepth = function(root) {
    function helper(root, depth) {
        if(!root) return depth;
        return Math.max(helper(root.left, depth + 1), helper(root.right, depth + 1));
    }
    return helper(root, 0);
};