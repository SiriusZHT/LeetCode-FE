// 剑指 Offer II 025. 链表中的两数相加
// 给定两个 非空链表 l1和 l2 来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

// 可以假设除了数字 0 之外，这两个数字都不会以零开头。

// 示例1：

// 输入：l1 = [7,2,4,3], l2 = [5,6,4]
// 输出：[7,8,0,7]
// 示例2：

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[8,0,7]
// 示例3：

// 输入：l1 = [0], l2 = [0]
// 输出：[0]
 

// 提示：

// 链表的长度范围为 [1, 100]
// 0 <= node.val <= 9
// 输入数据保证链表代表的数字无前导 0
 

// 进阶：如果输入链表不能修改该如何处理？换句话说，不能对列表中的节点进行翻转。

 

// 注意：本题与主站 445 题相同：https://leetcode-cn.com/problems/add-two-numbers-ii/

// 方法一：栈
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
var addTwoNumbers = function(l1, l2) {
    const arr1 = [];
    const arr2 = [];
    const res = [];
    while(l1) {
        arr1.push(l1.val)
        l1 = l1.next;
    }
    while(l2) {
        arr2.push(l2.val)
        l2 = l2.next;
    }
    let carry = 0;
    while(arr1.length && arr2.length) {
        let sum = arr1.pop() + arr2.pop() + carry;
        carry = Math.floor(sum / 10);
        res.push(Math.floor(sum % 10));
    }
    while(arr1.length) {
        let sum = arr1.pop() + carry;
        carry = Math.floor(sum / 10);
        res.push(Math.floor(sum % 10));
    }
    while(arr2.length) {
        let sum = arr2.pop() + carry;
        carry = Math.floor(sum / 10);
        res.push(Math.floor(sum % 10));
    }
    carry && res.push(carry);
    const dummy = new ListNode(-1);
    let cur = dummy;
    while(res.length) {
        cur.next = new ListNode(res.pop());
        cur = cur.next;
    }
    return dummy.next;
};

// 方法二：翻转链表
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
var addTwoNumbers = function(l1, l2) {
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
    // 反转 l1 l2
    l1 = revListNode(l1);
    l2 = revListNode(l2);
    const dummy = new ListNode(-1);
    let cur = dummy;
    let carry = 0;
    while(l1 && l2) {
        let sum = l1.val + l2.val + carry;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(Math.floor(sum % 10));
        l1 = l1.next;
        l2 = l2.next;
        cur = cur.next;
    }
    while(l1) {
        let sum = l1.val + carry;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(Math.floor(sum % 10));
        l1 = l1.next;
        cur = cur.next;
    }
    while(l2) {
        let sum = l2.val + carry;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(Math.floor(sum % 10));
        l2 = l2.next;
        cur = cur.next;
    }
    carry && (cur.next = new ListNode(carry));
    return revListNode(dummy.next);
};