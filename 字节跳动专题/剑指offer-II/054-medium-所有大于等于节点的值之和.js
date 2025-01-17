// 剑指 Offer II 054. 所有大于等于节点的值之和Copy for Markdown
// 给定一个二叉搜索树，请将它的每个节点的值替换成树中大于或者等于该节点值的所有节点值之和。

// 提醒一下，二叉搜索树满足下列约束条件：

// 节点的左子树仅包含键 小于 节点键的节点。
// 节点的右子树仅包含键 大于 节点键的节点。
// 左右子树也必须是二叉搜索树。
 

// 示例 1：

// 输入：root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
// 输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
// 示例 2：

// 输入：root = [0,null,1]
// 输出：[1,null,1]
// 示例 3：

// 输入：root = [1,0,2]
// 输出：[3,3,2]
// 示例 4：

// 输入：root = [3,2,4,1]
// 输出：[7,9,4,10]
 

// 提示：

// 树中的节点数介于 0 和 104 之间。
// 每个节点的值介于 -104 和 104 之间。
// 树中的所有值 互不相同 。
// 给定的树为二叉搜索树。
 

// 注意：

// 本题与主站 538 题相同： https://leetcode-cn.com/problems/convert-bst-to-greater-tree/
// 本题与主站 1038 题相同：https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/

// 比如图中的节点 5，转化成累加树的话，比 5 大的节点有 6，7，8，加上 5 本身，所以累加树上这个节点的值应该是 5+6+7+8=26

// 累加和是计算大于等于当前值的所有元素之和，那就是每个节点都去计算右子树的和

// 既然中序遍历：左根右 遍历的结果是升序

// 那如果我想降序：是不是稍微调整一下中序遍历的顺序，换成右根左，那遍历出来的结果就是降序

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let sum = 0;
  let traverse = (root) => {
    // 遍历到null节点，开始返回
    if (root == null) {
      return;
    }
    // 先进入右子树
    traverse(root.right);
    // 节点值累加给sum
    sum += root.val;
    // 累加的结果，赋给root.val
    root.val = sum;
    // 然后才进入左子树
    traverse(root.left);
  };
  // 递归的入口，从根节点开始
  traverse(root);
  return root;
};