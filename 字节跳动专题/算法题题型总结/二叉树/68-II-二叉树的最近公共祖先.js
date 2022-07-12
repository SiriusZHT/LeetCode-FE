// 先给出递归函数的定义：给该函数输入三个参数 root，p，q，它会返回一个节点
// 情况 1，如果 p 和 q 都在以 root 为根的树中，函数返回的就是 p 和 q 的最近公共祖先节点。
// 情况 2，那如果 p 和 q 都不在以 root 为根的树中怎么办呢？函数理所当然地返回 null 呗。
// 情况 3，那如果 p 和 q 只有一个存在于 root 为根的树中呢？函数就会返回那个节点。
// 根据这个定义，分情况讨论：
// 情况 1，如果 p 和 q 都在以 root 为根的树中，那么 left 和 right 一定分别是 p 和 q（从 base case 看出来的）。

// 情况 2，如果 p 和 q 都不在以 root 为根的树中，直接返回 null。

// 情况 3，如果 p 和 q 只有一个存在于 root 为根的树中，函数返回该节点。

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 遇到null，返回null 没有LCA
  if (root == null) return null;

  // 遇到p或q，直接返回当前节点
  if (root == q || root == p) return root;

  // 非null 非q 非p，则递归左右子树
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  // 根据递归的结果，决定谁是LCA
  if (left && right) return root;
  if (left == null && right == null) return null;
  return left == null ? right : left;
};
