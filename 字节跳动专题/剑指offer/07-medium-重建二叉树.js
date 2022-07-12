// ### [剑指 Offer 07\. 重建二叉树](https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/)
// 
// Difficulty: **输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。   示例 1: Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7] Output: [3,9,20,null,null,15,7] 示例 2: Input: preorder = [-1], inorder = [-1] Output: [-1]   限制： 0 <= 节点个数 <= 5000   注意：本题与主站 105 题重复：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/ **
// 
// 
// 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。
// 
// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 
// **示例 1:**
// 
// ![](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)
// 
// ```
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// ```
// 
// **示例 2:**
// 
// ```
// Input: preorder = [-1], inorder = [-1]
// Output: [-1]
// ```
// 
// **限制：**
// 
// `0 <= 节点个数 <= 5000`
// 
// **注意**：本题与主站 105 题重复：
// 
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length) return null;

    let rootVal = preorder[0];
    let index = inorder.indexOf(rootVal);
    let leftInorder = inorder.slice(0, index);
    let rightInorder = inorder.slice(index + 1);
    let leftLen = leftInorder.length;
    let leftPreorder = preorder.slice(1, leftLen + 1);
    let rightPreorder = preorder.slice(leftLen + 1);

    let root = new TreeNode(rootVal);
    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);
    
    return root;
};