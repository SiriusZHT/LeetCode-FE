/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let p1 = list1, p2 = list2;
    let dummy = new ListNode(-1);
    let cur = dummy;
    while(p1 && p2) {
        if(p1.val <= p2.val) {
            cur.next = new ListNode(p1.val);
            cur = cur.next;
            p1 = p1.next;
        } else {
            cur.next = new ListNode(p2.val);
            cur = cur.next;
            p2 = p2.next;
        }
    }
    p1 && (cur.next = p1);
    p2 && (cur.next = p2);
    return dummy.next;
};