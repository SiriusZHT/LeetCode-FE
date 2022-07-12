// 剑指 Offer II 052. 展平二叉搜索树Copy for Markdown
// 给你一棵二叉搜索树，请 按中序遍历 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。

// 示例 1：

// 输入：root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// 输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
// 示例 2：

// 输入：root = [5,1,7]
// 输出：[1,null,5,null,7]
 
// 提示：

// 树中节点数的取值范围是 [1, 100]
// 0 <= Node.val <= 1000
 

// 注意：本题与主站 897 题相同： https://leetcode-cn.com/problems/increasing-order-search-tree/

// 方法一：执行中序遍历，把节点值依次加入结果集中
// 利用结果集构建题目要求只有右子节点的递增顺序的搜索树
// 空间复杂度为O(n)
var increasingBST = function (root) {
  const res = [];
  const inorder = (node, res) => {
    if (!node) {
      return;
    }
    inorder(node.left, res);
    res.push(node.val);
    inorder(node.right, res);
  };
  // 中序遍历，构建结果集res
  inorder(root, res);
  // 根据结果集来构建符合题目要求的只有右子节点的递增顺序的搜索树
  const dummyNode = new TreeNode(-1);
  let currNode = dummyNode;
  for (const value of res) {
    currNode.right = new TreeNode(value);
    // 向前走一步
    currNode = currNode.right;
  }
  return dummyNode.right;
};

// 方法二：不需要额外空间复杂度的解题思路
// 在执行中序遍历的情况下改变链表的指向
// 空间复杂度为O(1)
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let dummyNode = new TreeNode(-1);
  let resNode = dummyNode;
  const inOrder = (node) => {
    if (node == null) return;
    inOrder(node.left);
    // 第一次进入这里的时候，node是整个树当中最左边最小的节点
    resNode.right = node;
    // 上面只是resNode的右节点指向了当前节点，为避免链串
    node.left = null;
    // 相当于向前走了一步（返回的链表只有右节点，向右走了一步，方便下次指向）
    resNode = node;
    inOrder(node.right);
  };
  inOrder(root);
  return dummyNode.right;
};

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/NYBBNL/solution/li-yong-zhong-xu-bian-li-gou-jian-di-zen-3qkq/