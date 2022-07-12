/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let cur = head;
    let count = 0;
    while(cur) {
        cur = cur.next;
        count++;
    }
    cur = head;
    for(let i = 0; i < count - k; i++) {
        cur = cur.next;
    }
    return cur;
};