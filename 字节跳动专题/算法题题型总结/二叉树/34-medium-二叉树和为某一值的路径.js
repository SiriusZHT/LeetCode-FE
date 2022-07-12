// 方法一  DFS
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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
    if (!root) return [];
    let res = [];
    function dfs(node, sum, path) {
        if (!node) return false;
        let { left, right, val } = node;
        path.push(val);
        if (val === sum && !left && !right) res.push(path);
        dfs(left, sum - val, path.slice());
        dfs(right, sum - val, path.slice());
    }
    dfs(root, target, []);
    return res;
};

// 方法二 回溯
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
 * @param {number} target
 * @return {number[][]}
 */
const backTrack = (node, targetSum, stack, sum, res) => {
    // 将节点入栈
    stack.push(node.val);
    // 节点加入到sum中
    sum += node.val;
    // 到达了叶子节点，并且当前记录的sum正好满足条件
    if (!node.left && !node.right && sum === targetSum) {
        // 将栈中的节点拷贝一份，推入返回结构res中
        // 若不拷贝的话，推入的是引用，stack改变，res里的stack也会改变
        res.push([...stack]);
    }
    // 如果存在左节点，继续遍历左子树，右子树同理
    node.left && backTrack(node.left, targetSum, stack, sum, res);
    node.right && backTrack(node.right, targetSum, stack, sum, res);
    // 向上回溯，stack弹出一个节点
    stack.pop();
};

const pathSum = (root, targetSum) => {
    // 存储结果的数组
    const res = [];
    // 回溯用的栈
    const stack = [];
    // 开始回溯
    root && backTrack(root, targetSum, stack, 0, res);
    return res;
};