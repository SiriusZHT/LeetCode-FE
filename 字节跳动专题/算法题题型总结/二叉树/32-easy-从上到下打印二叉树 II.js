// 32 easy 从上到下打印二叉树2

// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
//
// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：
//
// [
//   [3],
//   [9,20],
//   [15,7]
// ]
//  
//
// 提示：
// 节点总数 <= 1000

// 面试题32 - 从上到下打印二叉树2
var levelOrder2 = function (root) {
    if (!root) return []
    let result = [];
    let nodes = [root];
    let bfs = (nodes) => {
        let curLevelVal = [];
        let nextLevelNodes = []
        for (let i = 0; i < nodes.length; i++) {
            curLevelVal.push(nodes[i].val);
            if (nodes[i].left) {
                nextLevelNodes.push(nodes[i].left);
            }
            if (nodes[i].right) {
                nextLevelNodes.push(nodes[i].right);
            }
        }
        result.push(curLevelVal);
        if (!nextLevelNodes.length) return;
        bfs(nextLevelNodes);
    };
    bfs(nodes);
    return result;
};

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
var levelOrder = function (root) {
    if (!root) return [];
    const res = [];
    const arr = [root];
    while (arr.length) {
        let len = arr.length;
        let curLevel = [];
        for (let i = 0; i < len; i++) {
            let cur = arr.shift();
            curLevel.push(cur.val);
            cur.left && arr.push(cur.left);
            cur.right && arr.push(cur.right);
        }
        res.push(curLevel);
    }
    return res;
};