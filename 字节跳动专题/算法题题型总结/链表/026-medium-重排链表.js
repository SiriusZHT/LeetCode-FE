// 剑指 Offer II 026. 重排链表
// 给定一个单链表 L 的头节点 head ，单链表 L 表示为：

//  L0 → L1 → … → Ln-1 → Ln 
// 请将其重新排列后变为：

// L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …

// 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// 示例 1:

// 输入: head = [1,2,3,4]
// 输出: [1,4,2,3]
// 示例 2:

// 输入: head = [1,2,3,4,5]
// 输出: [1,5,2,4,3]
 

// 提示：

// 链表的长度范围为 [1, 5 * 104]
// 1 <= node.val <= 1000
 

// 注意：本题与主站 143 题相同：https://leetcode-cn.com/problems/reorder-list/ 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 方法一：栈 + 双指针
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const arr = [];
    const dummy = head;
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    let cur = dummy;
    let l = 1, r = arr.length - 1;
    while(l < r) {
        cur.next = new ListNode(arr[r--]);
        cur = cur.next;
        cur.next = new ListNode(arr[l++]);
        cur = cur.next;
    }
    Math.floor(arr.length % 2) === 0 && (cur.next = new ListNode(arr[l]));
};


// 方法二：翻转链表连接
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const findMid = (head) => {
        let fast = head;
        let slow = head;
        while(fast.next && fast.next.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    }
    const revListNode = (head) => {
        let pre = null, cur = head;
        while(cur) {
            let next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        return pre;
    }
    const mergeList = (l1, l2) => {
        while(l1 && l2) {
            let l1next = l1.next;
            let l2next = l2.next;
            l1.next = l2;
            l1 = l1next;
            l2.next = l1;
            l2 = l2next;
        }
    }

    let mid = findMid(head);
    let revList = revListNode(mid.next);
    mid.next = null;
    mergeList(head, revList);
};