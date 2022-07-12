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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function helper(p1, p2) {
        if(!p1 || !p2) return p1 == p2;
        return p1.val === p2.val && helper(p1.left, p2.right) && helper(p1.right, p2.left);
    }
    return helper(root, root);
}

// BFS
var isSymmetric = function (root) {
  let check = (left, right) => {
    let queue = [left, right];
    while (queue.length) {
      left = queue.shift();
      right = queue.shift();
      // 两个都是空节点 则是对称的
      if (left == null && right == null) continue;
      // 两个中只有一个是空节点  则是不对称
      if (left == null || right == null || left.val != right.val) return false;
      // 按照一对一对的顺序加入队列  左子节点的左节点和右子节点的右节点   左子节点的右节点和右子节点的左节点
      queue.push(left.left);
      queue.push(right.right);
      queue.push(left.right);
      queue.push(right.left);
    }
    return true;
  };
  return check(root, root);
};