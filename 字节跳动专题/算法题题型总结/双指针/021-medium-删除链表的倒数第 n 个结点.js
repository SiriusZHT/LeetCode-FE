// 剑指 Offer II 021. 删除链表的倒数第 n 个结点
// 给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 示例 1：

// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
// 示例 2：

// 输入：head = [1], n = 1
// 输出：[]
// 示例 3：

// 输入：head = [1,2], n = 1
// 输出：[1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 单指针遍历两遍 第一遍记录 count 第二遍遍历 count - n 然后进行 next 的修改操作
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode();
    dummy.next = head;
    let p1 = head, p2 = dummy;
    let count = 0;
    while(p1) {
        count++;
        p1 = p1.next;
    }
    for(let i = 0; i < count - n; i++) {
        p2 = p2.next;
    }
    let next = p2.next ? p2.next.next : null;
    p2.next = next;
    return dummy.next;
};


// 双指针遍历迭代 先cur统计count 然后cur回归head，pre和cur迭代，最后把pre的next设置成cur的next即可
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
     const dummy = new ListNode(-1);
     dummy.next = head;
     let cur = dummy;
     let count = 0;
    while(cur.next) {
        count++;
        cur = cur.next;
    }
    let x = count - n;
    cur = head;
    let pre = dummy;
    for(let i = 0; i < x; i++) {
        pre = cur;
        cur = cur.next;
    }
    pre.next = cur.next;
    return dummy.next;
};