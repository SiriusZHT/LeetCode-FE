// 剑指 Offer II 048. 序列化与反序列化二叉树Copy for Markdown
// 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

// 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

// 示例 1：

// 输入：root = [1,2,3,null,null,4,5]
// 输出：[1,2,3,null,null,4,5]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [1]
// 输出：[1]
// 示例 4：

// 输入：root = [1,2]
// 输出：[1,2]
 

// 提示：

// 输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，也可以采用其他的方法解决这个问题。
// 树中结点数在范围 [0, 104] 内
// -1000 <= Node.val <= 1000
 

// 注意：本题与主站 297 题相同：https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/ 
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 方法一：队列广度遍历
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = (root) => {
  const queue = [root];
  let res = [];
  while (queue.length) {
    const node = queue.shift(); // 考察出列的节点
    if (node) {
      // 是真实节点，带出子节点入列
      res.push(node.val); // 节点值推入res
      queue.push(node.left); // 子节点入列，不管是不是null节点都入列
      queue.push(node.right);
    } else {
      // 是null节点，没有子节点入列
      res.push("#"); // # 推入res
    }
  }
  return res.join(","); // 转成字符串
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = (data) => {
  if (data == "#") return null;

  const list = data.split(","); // 序列化字符串split成数组

  const root = new TreeNode(list[0]); // 获取首项，构建根节点
  const queue = [root]; // 根节点推入队列
  let cursor = 1; // 初始指向list第二项

  while (cursor < list.length) {
    // 指针越界，即扫完了序列化字符串
    const node = queue.shift(); // 考察出列的节点
    const leftVal = list[cursor]; // 它的左儿子的值
    const rightVal = list[cursor + 1]; // 它的右儿子的值

    if (leftVal != "#") {
      // 是真实节点
      const leftNode = new TreeNode(leftVal); // 创建左儿子节点
      node.left = leftNode; // 认父亲
      queue.push(leftNode); // 自己也是父亲，入列
    }
    if (rightVal != "#") {
      const rightNode = new TreeNode(rightVal);
      node.right = rightNode;
      queue.push(rightNode);
    }
    cursor += 2; // 一次考察一对儿子，指针加2
  }
  return root; // BFS结束，构建结束，返回根节点
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// 方法二：后序递归遍历
const deserialize = (data) => {
  const list = data.split(","); // split成数组

  const buildTree = (list) => {
    // 基于list构建当前子树
    const rootVal = list.shift(); // 弹出首项，获取它的“数据”
    if (rootVal == "#") {
      // 是X，返回null节点
      return null;
    }
    const root = new TreeNode(rootVal); // 不是X，则创建节点
    root.left = buildTree(list); // 递归构建左子树
    root.right = buildTree(list); // 递归构建右子树
    return root; // 返回当前构建好的root
  };

  return buildTree(list); // 构建的入口
};
const serialize = (root) => {
  if (root == null) {
    // 遍历到 null 节点
    return "#";
  }
  const left = serialize(root.left); // 左子树的序列化结果
  const right = serialize(root.right); // 右子树的序列化结果
  return root.val + "," + left + "," + right; // 按  根,左,右  拼接字符串
};