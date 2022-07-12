/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;
    let fast = head, slow = head;
    // 注意结束条件
    while(fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
        // 这里不能比较 val 因为相同 val 可能是不同 new 的节点
        if(fast === slow) {
            return true;
        }
    }
    return false;
};