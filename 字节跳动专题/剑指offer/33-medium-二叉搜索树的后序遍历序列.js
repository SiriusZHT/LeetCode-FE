// 剑指 Offer 33. 二叉搜索树的后序遍历序列
// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。



// 参考以下这颗二叉搜索树：

// 5
//     / \
// 2   6
//     / \
// 1   3
// 示例 1：

// 输入: [1, 6, 3, 2, 5]
// 输出: false
// 示例 2：

// 输入: [1, 3, 2, 6, 5]
// 输出: true

//方法一 单调栈 

// 二叉搜索树是left < root < right的，后序遍历的顺序是left->right->root，乍一看，好像没有办法保证单调性，不过我们可以做一个变化，后序遍历的逆序是什么呢？

// root->right->left

// 发现什么了吗？是的，这是换了一个方向的先序遍历，从root开始，先遍历右子树，再遍历左子树。怎么做到先root，然后right，最后left呢，只要我们反向遍历数组，这样我们就可以利用单调栈了。

// 下面说说单调递增栈的思路和用法。

// 翻转先序遍历又是root->right->left的，基于这样的性质和遍历方式，我们知道越往右越大，这样，就可以构造一个单调递增的栈，来记录遍历的元素。

// 为什么要用单调栈呢，因为往右子树遍历的过程，value是越来越大的，一旦出现了value小于栈顶元素value的时候，就表示要开始进入左子树了（如果不是，就应该继续进入右子树，否则不满足二叉搜索树的定义，不理解的请看下二叉搜索树的定义），但是这个左子树是从哪个节点开始的呢？

// 单调栈帮我们记录了这些节点，只要栈顶元素还比当前节点大，就表示还是右子树，要移除，因为我们要找到这个左孩子节点直接连接的父节点，也就是找到这个子树的根，只要栈顶元素还大于当前节点，就要一直弹出，直到栈顶元素小于节点，或者栈为空。栈顶的上一个元素就是子树节点的根。

// 接下来，数组继续往前遍历，之后的左子树的每个节点，都要比子树的根要小，才能满足二叉搜索树，否则就不是二叉搜索树。

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    // 单调栈使用，单调递增的单调栈
    const stack = [];
    let root = Number.MAX_SAFE_INTEGER;
    // 逆向遍历，就是翻转的先序遍历 root->right->left
    for (let i = postorder.length - 1; i >= 0; i--) {
        // 左子树元素必须要小于递增栈被peek访问的元素，否则就不是二叉搜索树
        if (postorder[i] > root) return false;
        while (stack.length && stack[stack.length - 1] > postorder[i]) {
            // 数组元素小于单调栈的元素了，表示往左子树走了，记录下上个根节点
            // 找到这个左子树对应的根节点，之前右子树全部弹出，不再记录，因为不可能在往根节点的右子树走了
            root = stack.pop();
        }
        // 这个新元素入栈
        stack.push(postorder[i]);
    }
    return true;
};

// 方法二 递归解法：
// 必须要使用到二叉搜索树的特性
// 特性1. 树的所有子节点都小于树的根节点
// 特性2. 后续遍历的最后一个节点为根节点

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {

    // 递归解法：
    // 必须要使用到二叉搜索树的特性
    // 特性1. 树的所有子节点都小于树的根节点
    // 特性2. 后续遍历的最后一个节点为根节点

    return helper(postorder, 0, postorder.length - 1);

    /**
     * @params
     */
    function helper(postorder, left, right) {
        // 只有一个值
        if (left >= right) {
            return true
        }

        let mid = left, root = postorder[right]

        // 需要先区分哪些是左子树的值，哪些是右子树的值，那通过什么方法找呢
        // 答案：找出左边第一个大于 root 节点的索引 mid，索引 mid 到 [mid, right] 的索引就是右子树的元素，[left, mid - 1] 就是左子树的值
        while (postorder[mid] < root) {
            mid++
        }

        // 这里是判断是否右子树存在小于根节点的值，如果存在就不符合二叉搜索树的要求
        let temp = mid
        while (temp < right) {
            if (postorder[temp++] < root) {
                return false
            }
        }

        // 第一个大于根节点的索引
        return helper(postorder, left, mid - 1) && helper(postorder, mid, right - 1)

    }
};