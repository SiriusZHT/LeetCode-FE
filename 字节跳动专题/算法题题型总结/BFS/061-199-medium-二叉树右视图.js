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
 * @return {number[]}
 */
// BFS
var rightSideView = function(root) {
    if(!root) return [];
    const queue = [root];
    const res = [];
    while(queue.length) {
        let len = queue.length;
        for(let i = 0; i < len; i++) {
            let cur = queue.shift();
            if(i === len - 1) res.push(cur.val);
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
    }
    return res;
};

// DFS 递归遍历解法
var rightSideView = function (root) {
  let res = [];
  // 记录递归的层数
  let depth = 0;
  // 二叉树遍历函数
  const dfs = (root) => {
    if (root == null) return;
    depth++;
    if (res.length < depth) {
      // 这一层还没有记录值，说明 root 就是右侧视图的第一个节点
      // res 如果已经记录有值的话 一定是 res.length = depth
      res.push(root.val);
    }
    // 注意，这里反过来，先遍历右子树再遍历左子树，这样首先遍历的一定是右侧节点
    dfs(root.right);
    dfs(root.left);
    depth--;
  };
  dfs(root);
  return res;
};