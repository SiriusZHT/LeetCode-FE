// 剑指 Offer 25. 合并两个排序的链表
// 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

// 示例1：

// 输入：1 -> 2 -> 4, 1 -> 3 -> 4
// 输出：1 -> 1 -> 2 -> 3 -> 4 -> 4
// 限制：

// 0 <= 链表长度 <= 1000

// 注意：本题与主站 21 题相同：https://leetcode-cn.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let cur = new ListNode();
    const dummy = cur;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    l1 && (cur.next = l1);
    l2 && (cur.next = l2);
    return dummy.next;
};