// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
// 叶子节点 是指没有子节点的节点。
// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// 输出：[[5,4,11,2],[5,8,4,5]]
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
 * @param {number} targetSum
 * @return {number[][]}
 */
// DFS
var pathSum = function(root, targetSum) {
    const res = [];
    function helper(root, temp, sum) {
        if(!root) return;
        temp.push(root.val);
        let curSum = sum - root.val;
        if(!root.left && !root.right && curSum === 0) res.push([...temp]);
        helper(root.left, temp, curSum);
        helper(root.right, temp, curSum); 
        temp.pop();
    }
    helper(root, [], targetSum);
    return res;
};

// BFS
var pathSum = function (root, targetSum) {
  let res = [];
  let map = new Map();
  // 通过底下叶子节点 获得从叶子节点到根节点的路径
  const getPath = (node) => {
    let path = [];
    while (node) {
      path.push(node.val);
      // 向上找它的父节点
      node = map.get(node);
    }
    path.reverse();
    return path;
  };
  const bfs = (root, sum) => {
    // 队列中每一个元素包含 节点  节点及路过路径上的值的和
    let queue = [[root, sum]];
    while (queue.length) {
      let [node, sum] = queue.shift();
      // 如果是叶子节点并且 路径总和已经等于目标值了
      if (node.left == null && node.right == null && sum == targetSum) {
        res.push(getPath(node));
      } else {
        if (node.left) {
          queue.push([node.left, node.left.val + sum]);
          // map里面存的key是子节点  value是父节点   这样方便向上查找路径
          map.set(node.left, node);
        }
        if (node.right) {
          queue.push([node.right, node.right.val + sum]);
          map.set(node.right, node);
        }
      }
    }
  };
  if (root == null) return [];
  // 节点  节点及路过路径上的值的和
  bfs(root, root.val);
  return res;
};