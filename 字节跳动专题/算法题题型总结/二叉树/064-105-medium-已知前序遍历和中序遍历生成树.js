// 已知 前序遍历数组、中序遍历数组 求生成树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 已知 前序遍历数组、中序遍历数组 求生成树
var buildTree = function(preorder, inorder) {
    if(!preorder.length) return null;

    let root = preorder[0];
    let rootIndexInInorder = inorder.indexOf(root);
    
    let rootLeftInorder = inorder.slice(0, rootIndexInInorder);
    let rootRightInorder = inorder.slice(rootIndexInInorder + 1);
    
    let rootLeftPreorder = preorder.slice(1, rootLeftInorder.length + 1);
    let rootRightPreorder = preorder.slice(rootLeftInorder.length + 1);

    let node = new TreeNode(root);
    node.left = buildTree(rootLeftPreorder, rootLeftInorder);
    node.right = buildTree(rootRightPreorder, rootRightInorder);

    return node;
};