// 剑指 Offer II 051. 节点之和最大的路径Copy for Markdown
// 路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。

// 路径和 是路径中各节点值的总和。

// 给定一个二叉树的根节点 root ，返回其 最大路径和，即所有路径上节点值之和的最大值。

 

// 示例 1：

// 输入：root = [1,2,3]
// 输出：6
// 解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
// 示例 2：


// 输入：root = [-10,9,20,null,null,15,7]
// 输出：42
// 解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
 

// 提示：

// 树中节点数目范围是 [1, 3 * 104]
// -1000 <= Node.val <= 1000
 

// 注意：本题与主站 124 题相同： https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/

// 一个子树内部的最大路径和 = 左子树提供的最大路径和 + 根节点值 + 右子树提供的最大路径和

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
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    function helper(root) {
        if(!root) return 0;
        let left = helper(root.left);
        let right = helper(root.right);

        let allSum = left + root.val + right;
        maxSum = Math.max(maxSum, allSum);
        let curSum = Math.max(left, right) + root.val;
        return curSum < 0 ? 0 : curSum;
    }
    helper(root);
    return maxSum;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let maxSum = Number.MIN_SAFE_INTEGER; // 最大路径和

  const dfs = (root) => {
    if (root == null) {
      // 遍历到null节点，收益0
      return 0;
    }
    const left = dfs(root.left); // 左子树提供的最大路径和
    const right = dfs(root.right); // 右子树提供的最大路径和

    const innerMaxSum = left + root.val + right; // 当前子树内部的最大路径和
    maxSum = Math.max(maxSum, innerMaxSum); // 挑战最大纪录

    const outputMaxSum = root.val + Math.max(left, right); // 当前子树对外提供的最大和

    // 对外提供的路径和为负，直接返回0。否则正常返回
    return outputMaxSum < 0 ? 0 : outputMaxSum;
  };

  dfs(root); // 递归的入口
  return maxSum;
};

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/jC7MId/solution/shen-du-you-xian-sou-suo-tu-jie-jian-wen-4oeg/

