// 剑指 Offer 24. 反转链表
// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。



// 示例:

// 输入: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// 输出: 5 -> 4 -> 3 -> 2 -> 1 -> NULL

// 206 easy 反转链表

// 方法一 数组存 然后生成
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head) return head
    let arr = []
    let curNode = head;
    while (curNode) {
        arr.push(curNode.val)
        curNode = curNode.next
    }
    head = new ListNode(arr.splice([arr.length - 1], 1))
    let cNode = head;
    while (arr.length) {
        cNode.next = new ListNode(arr.splice(arr.length - 1, 1))
        cNode = cNode.next;
    }
    return head;
};

// 方法二 双指针
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let pre = null, cur = head;
    while (cur) {
        [cur.next, pre, cur] = [pre, cur, cur.next];
    }
    return pre;
};
