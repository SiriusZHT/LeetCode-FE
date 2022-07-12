// 剑指 Offer II 056. 二叉搜索树中两个节点之和
// 给定一个二叉搜索树的 根节点 root 和一个整数 k , 请判断该二叉搜索树中是否存在两个节点它们的值之和等于 k 。假设二叉搜索树中节点的值均唯一。

 

// 示例 1：

// 输入: root = [8,6,10,5,7,9,11], k = 12
// 输出: true
// 解释: 节点 5 和节点 7 之和等于 12
// 示例 2：

// 输入: root = [8,6,10,5,7,9,11], k = 22
// 输出: false
// 解释: 不存在两个节点值之和为 22 的节点
 

// 提示：

// 二叉树的节点个数的范围是  [1, 104].
// -104 <= Node.val <= 104
// root 为二叉搜索树
// -105 <= k <= 105
 

// 注意：本题与主站 653 题相同： https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/

// 使用深度优先搜索方式，每遍历到一个元素就把当前值存入到哈希表中，外加判断即可

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let set = new Set();
  var diff = function (node) {
    if (node === null) {
      return false;
    }
    if (set.has(k - node.val)) {
      // 判断是否存在满足条件的值
      return true;
    }
    set.add(node.val); // 将节点值存入 set 中
    return diff(node.left) || diff(node.right); // 只要存在 true 即可  这里是或 不是且
  };
  return diff(root);
};