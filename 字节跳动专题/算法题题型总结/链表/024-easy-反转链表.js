// 剑指 Offer II 024. 反转链表Copy for Markdown
// 给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。 

// 示例 1：

// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]
// 示例 2：


// 输入：head = [1,2]
// 输出：[2,1]
// 示例 3：

// 输入：head = []
// 输出：[]
 

// 提示：

// 链表中节点的数目范围是 [0, 5000]
// -5000 <= Node.val <= 5000
 

// 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

// 注意：本题与主站 206 题相同： https://leetcode-cn.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代
var reverseList = function(head) {
    let pre = null, cur = head;
    while(cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
};

// 递归
var reverseList = function(head) {
    function recur(cur, pre) {
        if(cur === null) return pre; // 终止条件
        let res = recur(cur.next, cur); // 递归后继节点
        cur.next = pre; // 修改节点引用指向
        return res; // 返回反转链表的头节点
    }
    return recur(head, null); // 调用递归并返回
};