/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    const res = [];
    const queue = [root];
    while(queue.length) {
        let len = queue.length;
        const arr = [];
        for(let i = 0; i < len; i++) {
            let cur = queue.shift();
            arr.push(cur.val);
            for(let ch of cur.children) {
                queue.push(ch);
            }
        }
        res.push(arr);
    }
    return res;
};