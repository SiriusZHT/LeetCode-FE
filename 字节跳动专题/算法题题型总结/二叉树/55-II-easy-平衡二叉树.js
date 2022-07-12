// 暴力解法的解题思路是遍历二叉树，然后对每一个节点计算左右的最大高度。但是计算一棵二叉树的最大深度也需要递归遍历这棵树的所有节点，如果对每个节点都算一遍最大深度，时间复杂度是比较高的。
// 反向思考的思路是：只计算一次最大深度，计算的过程中在后序遍历位置顺便判断二叉树是否平衡：
// 对于每个节点，先算出来左右子树的最大高度，然后在后序遍历的位置根据左右子树的最大高度判断平衡性。
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  // 记录二叉树是否平衡
  let flag = true;
  const maxDepth = (root) => {
    if (root == null) return 0;
    let leftMaxDepth = maxDepth(root.left);
    let rightMaxDepth = maxDepth(root.right);
    // 如果左右最大深度大于 1，就不是平衡二叉树
    if (Math.abs(rightMaxDepth - leftMaxDepth) > 1) {
      flag = false;
    }
    return 1 + Math.max(leftMaxDepth, rightMaxDepth);
  };
  maxDepth(root);
  return flag;
};

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/solution/bu-chao-guo-10xing-dai-ma-bi-xu-miao-don-tu8g/