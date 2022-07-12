// 剑指 Offer II 053. 二叉搜索树中的中序后继Copy for Markdown
// 给定一棵二叉搜索树和其中的一个节点 p ，找到该节点在树中的中序后继。如果节点没有中序后继，请返回 null 。

// 节点 p 的后继是值比 p.val 大的节点中键值最小的节点，即按中序遍历的顺序节点 p 的下一个节点。

// 示例 1：

// 输入：root = [2,1,3], p = 1
// 输出：2
// 解释：这里 1 的中序后继是 2。请注意 p 和返回值都应是 TreeNode 类型。
// 示例 2：

// 输入：root = [5,3,6,2,4,null,null,1], p = 6
// 输出：null
// 解释：因为给出的节点没有中序后继，所以答案就返回 null 了。
 

// 提示：

// 树中节点的数目在范围 [1, 104] 内。
// -105 <= Node.val <= 105
// 树中各节点的值均保证唯一。
 

// 注意：本题与主站 285 题相同： https://leetcode-cn.com/problems/inorder-successor-in-bst/

// 下一个节点的值一定不会小于节点p的值，而是大于或等于节点p的值中的所有节点中值最小的一个
// 从根节点开始，每到达一个节点就比较根节点的值和节点p的值
// 如果当前节点的值小于或等于节点p的值，那么节点p的下一个节点应该在它的右子树
// 如果当前节点的值大于或等于节点p的值，那么当前节点有可能是p的下一个节点，此时当前节点的值比节点p的值大，但节点p的下一个节点是所有比它大的节点中值最小的一个
// 因此接下来前往当前节点的左子树，确定是否能找到值更小，但仍然大于节点p的值的节点

// 就像是树的二分法一样
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
  let cur = root;
  let result = null;
  while (cur) {
    if (cur.val > p.val) {
      result = cur;
      cur = cur.left;
    } else {
      cur = cur.right;
    }
  }
  return result;
};