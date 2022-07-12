// 剑指 Offer II 043. 往完全二叉树添加节点
// 完全二叉树是每一层（除最后一层外）都是完全填充（即，节点数达到最大，第 n 层有 2n-1 个节点）的，并且所有的节点都尽可能地集中在左侧。

// 设计一个用完全二叉树初始化的数据结构 CBTInserter，它支持以下几种操作：

// CBTInserter(TreeNode root) 使用根节点为 root 的给定树初始化该数据结构；
// CBTInserter.insert(int v)  向树中插入一个新节点，节点类型为 TreeNode，值为 v 。使树保持完全二叉树的状态，并返回插入的新节点的父节点的值；
// CBTInserter.get_root() 将返回树的根节点。
 

// 示例 1：

// 输入：inputs = ["CBTInserter","insert","get_root"], inputs = [[[1]],[2],[]]
// 输出：[null,1,[1,2]]
// 示例 2：

// 输入：inputs = ["CBTInserter","insert","insert","get_root"], inputs = [[[1,2,3,4,5,6]],[7],[8],[]]
// 输出：[null,3,4,[1,2,3,4,5,6,7,8]]
 

// 提示：

// 最初给定的树是完全二叉树，且包含 1 到 1000 个节点。
// 每个测试用例最多调用 CBTInserter.insert  操作 10000 次。
// 给定节点或插入节点的每个值都在 0 到 5000 之间。
 

// 注意：本题与主站 919 题相同： https://leetcode-cn.com/problems/complete-binary-tree-inserter/

// 我们可以每次在完全二叉树中按照广度优先搜索的顺序找出第1个需要被插入节点的元素，如果它没有左子节点，那么新的节点就作为它的左子节点，如果它没有右子节点，那么新的节点就作为它的右子节点
// 没有必要每次插入新的节点时都从完全二叉树的根节点开始从头到尾进行广度优先搜索
// 第一种实现方式是：初始化时会把根节点插入到队列中，并且把队列中元素准备好，准备好的意思就是根据根节点，依次插入根节点的左右子节点，然后判断是否是在此节点下进行插入新节点；凡是有左右子节点的节点就可以从队列中移除，避免下一次插入的时候再重新判断一遍，也为了节省空间
// 第二种实现方式是：初始化时只把根节点插入到队列，第一次执行插入的时候才去整理队列中元素

/**
 * @param {TreeNode} root
 */
var CBTInserter = function (root) {
  this.queue = [];
  this.root = root;
  // 初始化的时候把根节点加入
  this.queue.push(root);
  // 通过根节点循环将所有的子孙节点加入队列
  while (this.queue[0] && this.queue[0].left && this.queue[0].right) {
    // 如果队首节点（当前节点）既有左子节点又有右子节点，那么就代表新插入的节点不会是当前节点的子节点
    // 那么将它的左右节点加入队列之后此节点就没有存在的必要了
    let node = this.queue.shift();
    this.queue.push(node.left);
    this.queue.push(node.right);
  }
  // 这样一波操作之后，队首节点一定是需要插入子节点
};

/**
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function (v) {
  // 由于初始化保证队首元素是需要插入子节点的元素
  let parent = this.queue[0];
  let node = new TreeNode(v);
  // 如果左节点需要被插入就直接插入到左子树中，否则就插入到右子树中
  if (parent.left == null) {
    parent.left = node;
  } else {
    parent.right = node;
    // 当左右子树都满情况下，当前父节点就可以光荣退岗了
    this.queue.shift();
    // 左右子树都满情况下，将左右子节点加入队列，以便为后面新插入节点做准备
    this.queue.push(parent.left);
    this.queue.push(parent.right);
  }
  return parent.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.root;
};