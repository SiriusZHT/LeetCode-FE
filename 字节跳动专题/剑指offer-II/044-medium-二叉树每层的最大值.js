// 剑指 Offer II 044. 二叉树每层的最大值Copy for Markdown
// 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。

// 示例1：

// 输入: root = [1,3,2,5,3,null,9]
// 输出: [1,3,9]
// 解释:
//           1
//          / \
//         3   2
//        / \   \  
//       5   3   9 
// 示例2：

// 输入: root = [1,2,3]
// 输出: [1,3]
// 解释:
//           1
//          / \
//         2   3
// 示例3：

// 输入: root = [1]
// 输出: [1]
// 示例4：

// 输入: root = [1,null,2]
// 输出: [1,2]
// 解释:      
//            1 
//             \
//              2     
// 示例5：

// 输入: root = []
// 输出: []
 

// 提示：

// 二叉树的节点个数的范围是 [0,104]
// -231 <= Node.val <= 231 - 1
 

// 注意：本题与主站 515 题相同： https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/

// 方法一：两个队列实现BFS

// 分别用两个队列来存放当前层和下一层节点
// 用两个队列实现二叉树的广度优先搜索
// 把不同层的节点放入到不同的队列中
// 队列queue1只放当前遍历层的节点
// 队列queue2只放下一层的节点

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  // 用两个队列分别存在不同层的节点
  // queue1存放当前遍历层的节点
  let queue1 = [];
  // queue2存放下一层的节点
  let queue2 = [];
  if (root) {
    queue1.push(root);
  }
  let result = [];
  let max = -Infinity;
  while (queue1.length) {
    let node = queue1.shift();
    max = Math.max(max, node.val);
    if (node.left) {
      queue2.push(node.left);
    }
    if (node.right) {
      queue2.push(node.right);
    }
    // 当queue1队列被清空时，当前层的所有节点都已经被遍历完了
    if (!queue1.length) {
      result.push(max);
      max = -Infinity;
    // 开始遍历下一层之前，重新赋值
      queue1 = queue2;
      queue2 = [];
    }
  }
  return result;
};


// 方法二：一个队列实现BFS，两个变量记录当前层和下一层节点的数量
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  // 用两个变量分别记录两层节点的数量，current记录当前层中位于队列之中节点的数量
  let current = 0;
  // 记录下一层中位于队列之中节点的数量
  let next = 0;
  let queue = [];
  // 把根节点加入到队列中 并让current赋值1
  if (root) {
    queue.push(root);
    current = 1;
  }
  let result = [];
  let max = -Infinity;
  while (queue.length) {
    // 从队首取出节点
    let node = queue.shift();
    // 当前层在队列中的数量减1
    current--;
    max = Math.max(max, node.val);
    // 将子节点加入队列，同时更新下一层中位于队列节点的数量
    if (node.left) {
      queue.push(node.left);
      next++;
    }
    if (node.right) {
      queue.push(node.right);
      next++;
    }
    // 当前层遍历完了
    if (current == 0) {
      // 把最大值加入结果集中
      result.push(max);
      // 在开始下一层遍历之前
      max = -Infinity;
      // 把current的值设为next并将next置为0
      current = next;
      next = 0;
    }
  }
  return result;
}


// 方法三：DFS实现
// 递归的时候把当前节点所在的层作为参数传入，然后结果集的当前层存最大值就OK了
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  let res = [];
  const dfs = (root, depth) => {
    if (root == null) return;
    // 不能用下面这句，因为null undefined 0 都会走默认取值逻辑，如果res[depth]刚好存的同层上一个为0的节点值，而当前节点值为-32，就不对了
    // res[depth] = Math.max(res[depth]||root.val, root.val);
    if (res[depth] == null) res[depth] = root.val;
    else res[depth] = Math.max(res[depth], root.val);
    dfs(root.left, depth + 1);
    dfs(root.right, depth + 1);
  };
  dfs(root, 0);
  return res;
};

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/hPov7L/solution/yan-du-you-xian-sou-suo-de-liang-chong-s-z2ic/