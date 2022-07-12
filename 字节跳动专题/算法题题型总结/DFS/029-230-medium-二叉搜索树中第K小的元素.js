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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res = 0;
    function helper(root) {
        if(!root) return;
        // 中序遍历 
        // 先 left
        helper(root.left);
        // 到达 最 left 的 root node
        if(--k === 0) {
            res = root.val;
            return;
        }
        // 再 right
        helper(root.right);
    }
    helper(root);
    return res;
};