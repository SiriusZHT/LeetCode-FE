// 103. 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    const queue = [root];
    let flag = 'right';
    const res = [];
    while(queue.length) {
        let len = queue.length;
        const arr = [];
        for(let i = 0; i < len; i++) {
            let cur = queue.shift();
            arr.push(cur.val);
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        if(flag === 'right') {
            res.push(arr);
            flag = 'left';
        } else {
            res.push(arr.reverse());
            flag = 'right';
        }
    }
    return res;
};