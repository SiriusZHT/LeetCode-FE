// 剑指 Offer II 045. 二叉树最底层最左边的值Copy for Markdown
// 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。

// 假设二叉树中至少有一个节点。

 

// 示例 1:



// 输入: root = [2,1,3]
// 输出: 1
// 示例 2:



// 输入: [1,2,3,4,null,5,6,null,null,7]
// 输出: 7
 

// 提示:

// 二叉树的节点个数的范围是 [1,104]
// -231 <= Node.val <= 231 - 1 
 

// 注意：本题与主站 513 题相同： https://leetcode-cn.com/problems/find-bottom-left-tree-value/

// 方法一：深度优先搜索DFS解题思路
// 二叉树递归框架代码是先递归左子树，后递归右子树，
// 所以到最大深度时第一次遇到的节点就是左下角的节点。
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  // 记录二叉树的最大深度
  let maxDepth = 0;
  // 记录 dfs 递归遍历到的深度
  let depth = 0;
  let res = null;
  const dfs = (root) => {
    if (root == null) return null;
    // 前序遍历位置
    depth++;
    // 递归进入下一层的时候 都会刷新 maxDepth 和 res 直到到最后一层递归出来
    // 递归出来之后 的那一层 的 depth <= 所以直接不用赋值了
    if (depth > maxDepth) {
      // 到最大深度时第一次遇到的节点就是左下角的节点
      maxDepth = depth;
      res = root;
    }
    dfs(root.left);
    dfs(root.right);
    depth--;
  };
  dfs(root);
  return res.val;
};


// 方法二：广度优先搜索BFS解题思路（单队列）
// 在每一层第一个节点的值保存下来，这样到最后一层的时候就是题目所需要的解
// 每次 for 循环的时候 i = 0 即可
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  let queue = [];
  // 非空则加入队列
  if (root) queue.push(root);
  let bottomLeftVal;
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      // 从队首出队列
      let cur = queue.shift();
      // 如果是某一层最左边节点，则赋值bottomLeftVal
      if (i == 0) bottomLeftVal = cur.val;
      // 左子节点不为空则加入队列
      if (cur.left) queue.push(cur.left);
      // 右子节点不为空则加入队列
      if (cur.right) queue.push(cur.right);
    }
  }
  return bottomLeftVal;
};

// 广度优先搜索BFS解题思路（双队列）
// 用两个队列分别存在不同层的节点
// 用一个变量存放当前层最左边的节点的值，更新变量值的时候就是遇到新的一层时
// 当前这一层 queue1.length 没有了遍历完了，就获取下一层的第一个即可

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  // 用两个队列分别存在不同层的节点
  // queue1存放当前遍历层的节点
  let queue1 = [];
  // queue2存放下一层的节点
  let queue2 = [];
  if (root) {
    queue1.push(root);
  }
  // bottomLeft来保存每一层最左边的节点的值
  let bottomLeft = root.val;
  while (queue1.length) {
    let node = queue1.shift();
    if (node.left) {
      queue2.push(node.left);
    }
    if (node.right) {
      queue2.push(node.right);
    }
    if (!queue1.length) {
      queue1 = queue2;
      queue2 = [];
      // 每遇到新的一层时，将变量bottomLeft的值更新为该层第1个节点的值
      if (queue1.length) {
        bottomLeft = queue1[0].val;
      }
    }
  }
  return bottomLeft;
};