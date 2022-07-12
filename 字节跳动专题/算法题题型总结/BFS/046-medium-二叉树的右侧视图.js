// 剑指 Offer II 046. 二叉树的右侧视图Copy for Markdown
// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

// 示例 1:

// 输入: [1,2,3,null,5,null,4]
// 输出: [1,3,4]
// 示例 2:

// 输入: [1,null,3]
// 输出: [1,3]
// 示例 3:

// 输入: []
// 输出: []
 

// 提示:

// 二叉树的节点个数的范围是 [0,100]
// -100 <= Node.val <= 100 
 

// 注意：本题与主站 199 题相同：https://leetcode-cn.com/problems/binary-tree-right-side-view/

// 二叉树的右侧视图其实就是从上到下每层最右边的节点
// 在遍历的时候把不同层的节点放入到不同的队列，利用两个队列存放当前遍历的层和下一层的节点
// 在遍历到新的一层的时机把节点加入结果集中

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  let view = [];
  if (root == null) {
    return view;
  }
  // 用两个队列分别存在不同层的节点
  // queue1存放当前遍历层的节点
  let queue1 = [];
  // queue2存放下一层的节点
  let queue2 = [];
  queue1.push(root);
  while (queue1.length) {
    let node = queue1.shift();
    if (node.left) {
      queue2.push(node.left);
    }
    if (node.right) {
      queue2.push(node.right);
    }
    // 当前这一层被遍历完，变量node就是这一层的最右边的节点
    if (!queue1.length) {
      view.push(node.val);
      queue1 = queue2;
      queue2 = [];
    }
  }
  return view;
};