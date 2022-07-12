// 剑指 Offer 32 - III.从上到下打印二叉树 III
// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。



// 例如:
// 给定二叉树: [3, 9, 20, null, null, 15, 7],

//     3
//     / \
// 9  20
//     /  \
// 15   7
// 返回其层次遍历结果：

// [
//     [3],
//     [20, 9],
//     [15, 7]
// ]

// 遍历出队 添加入队
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
 * @return {number[][]}
 */
const levelOrder = root => {
    if (!root) return [];
    const res = [];
    // 根节点入队
    const q = [root];
    // 是否需要反转的标志位
    let flag = false;
    // 当队列还有值时，一直执行
    while (q.length) {
        let len = q.length;
        res.push([]);
        while (len--) {
            // 获取根节点，根节点出队
            const n = q.shift();
            // 根节点加入res栈顶元素
            res[res.length - 1].push(n.val);
            // 队头左右节点入队
            n.left && q.push(n.left);
            n.right && q.push(n.right);
        }
        // 每隔一层，反转一次
        flag && res[res.length - 1].reverse();
        flag = !flag;
    }
    return res;
};