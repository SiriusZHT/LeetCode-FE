// 剑指 Offer II 047. 二叉树剪枝Copy for Markdown
// 给定一个二叉树 根节点 root ，树的每个节点的值要么是 0，要么是 1。请剪除该二叉树中所有节点的值为 0 的子树。

// 节点 node 的子树为 node 本身，以及所有 node 的后代。

// 示例 1:

// 输入: [1,null,0,0,1]
// 输出: [1,null,0,null,1] 
// 解释: 
// 只有红色节点满足条件“所有不包含 1 的子树”。
// 右图为返回的答案。

// 示例 2:

// 输入: [1,0,1,0,0,0,1]
// 输出: [1,null,1,null,1]
// 解释: 

// 示例 3:

// 输入: [1,1,0,1,1,0,1,0]
// 输出: [1,1,0,1,1,null,1]
// 解释:  

// 提示:

// 二叉树的节点个数的范围是 [1,200]
// 二叉树节点的值只会是 0 或 1

// 注意：本题与主站 814 题相同：https://leetcode-cn.com/problems/binary-tree-pruning/

// 一看就需要使用递归
// 题目要求剪除二叉树中所有节点的值为 0 的子树，那么怎么知道当前二叉树所有节点的值为0，使用后续遍历无疑了
// 递归只需要考虑当前节点需要做什么事情，当前节点能否被剪枝取决于左右子树及当前节点的值

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
  // 判断非空情况
  if (root == null) {
    return root;
  }
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  // 当左右节点都为空且当前节点的值为0的情况下，即可剪枝
  if (!root.left && !root.right && root.val == 0) {
    return null;
  }
  return root;
};