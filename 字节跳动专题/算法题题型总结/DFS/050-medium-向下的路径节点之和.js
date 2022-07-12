// 剑指 Offer II 050. 向下的路径节点之和Copy for Markdown
// 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

// 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

// 示例 1：

// 输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// 输出：3
// 解释：和等于 8 的路径有 3 条，如图所示。
// 示例 2：

// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// 输出：3
 

// 提示:

// 二叉树的节点个数的范围是 [0,1000]
// -109 <= Node.val <= 109 
// -1000 <= targetSum <= 1000 
 

// 注意：本题与主站 437 题相同：https://leetcode-cn.com/problems/path-sum-iii/

// 哈希表中记录的是二叉树路径中的前缀和，键是前缀和，值是此前缀和出现的次数
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let map = new Map();
  let ans = 0;
  dfs(root, 0);
  return ans;
  /**
   *
   * @param {*} root
   * @param {*} presum 前缀和
   * @returns
   */
  function dfs(root, presum) {
    if (!root) {
      return 0;
    }
    map.set(presum, (map.get(presum) || 0) + 1);
    let target = presum + root.val;
    ans += map.get(target - targetSum) || 0;
    // 继续找
    dfs(root.left, target);
    dfs(root.right, target);
    // 回溯 撤销
    map.set(presum, map.get(presum) - 1);
  }
};
