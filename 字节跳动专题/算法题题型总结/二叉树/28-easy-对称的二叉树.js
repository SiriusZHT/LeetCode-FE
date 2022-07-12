// 剑指 Offer 28. 对称的二叉树Copy for Markdown
// 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

// 例如，二叉树[1, 2, 2, 3, 4, 4, 3] 是对称的。

// 1
//     / \
// 2   2
//     / \ / \
// 3  4 4  3
// 但是下面这个[1, 2, 2, null, 3, null, 3] 则不是镜像对称的:

// 1
//     / \
// 2   2
// \   \
// 3    3



// 示例 1：

// 输入：root = [1, 2, 2, 3, 4, 4, 3]
// 输出：true
// 示例 2：

// 输入：root = [1, 2, 2, null, 3, null, 3]
// 输出：false

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;
    function helper(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;
        return (left.val === right.val) &&
            helper(left.left, right.right) &&
            helper(left.right, right.left);
    }
    return helper(root.left, root.right)
};