// 剑指 Offer 68 - I. 二叉搜索树的最近公共祖先Copy for Markdown
// 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

// 例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

// 示例 1:

// 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// 输出: 6 
// 解释: 节点 2 和节点 8 的最近公共祖先是 6。
// 示例 2:

// 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// 输出: 2
// 解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 
// 说明:
// 所有节点的值都是唯一的。
// p、q 为不同节点且均存在于给定的二叉搜索树中。
// 注意：本题与主站 235 题相同：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/


// 在 BST 中寻找最近公共祖先主要利用 BST 左小右大（左子树所有节点都比当前节点小，右子树所有节点都比当前节点大）的特点
// 思路主要下面3句话
// 如果 p 和 q 都比当前节点小，那么显然 p 和 q 都在左子树，那么 LCA 在左子树
// 如果 p 和 q 都比当前节点大，那么显然 p 和 q 都在右子树，那么 LCA 在右子树
// 一旦发现 p 和 q 在当前节点的两侧，说明当前节点就是 LCA
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root == null) return null;
  if (p.val > q.val) {
    // 保证 p.val <= q.val，便于后续情况讨论
    return lowestCommonAncestor(root, q, p);
  }
  if (root.val >= p.val && root.val <= q.val) {
    // p <= root <= q，也就是说 p 和 q 分别在 root 的左右子树，那么 root 就是 LCA
    return root;
  }
  if (root.val > q.val) {
    // p 和 q 都在 root 的左子树，那么 LCA 在左子树\
    return lowestCommonAncestor(root.left, p, q);
  }
  if (root.val < p.val) {
    // p 和 q 都在 root 的右子树，那么 LCA 在右子树
    return lowestCommonAncestor(root.right, p, q);
  }
};

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/solution/5ju-dai-ma-gao-ding-si-lu-jian-ji-zhu-sh-wb60/