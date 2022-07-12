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
 * @return {number[]}
 */
// 递归
var inorderTraversal = function(root) {
    if(!root) return [];
    const res = [];
    inorder(root);
    function inorder(root) {
        if(!root) return;
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    return res;
};

// 迭代
var inorderTraversal = function(root) {
    if(!root) return [];
    const res = [], stack = [];
    while(root || stack.length) {
        while(root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    
    return res;
};