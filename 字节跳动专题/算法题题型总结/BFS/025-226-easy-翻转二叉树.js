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
 * @return {TreeNode}
 */
// BFS
var invertTree = function(root) {
  if (root === null) {
    return root;
  }
  let helperStack = [root];
  while(helperStack.length > 0) {
    for (let i = 0, len = helperStack.length; i < len; i++) {
      let cur = helperStack.shift();
      let temp = cur.left;
      cur.left = cur.right;
      cur.right = temp;

      if (cur.left) {
        helperStack.push(cur.left);
      }
      if (cur.right) {
        helperStack.push(cur.right);
      }
    }
  }
  return root;
};

// DFS
var invertTree = function(root) {
  if (root === null) {
    return root;
  }
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
};