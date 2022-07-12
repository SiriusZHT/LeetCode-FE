/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    let p1 = headA, p2 = headB;
    // 两个一直同步走 一旦有一个到终点 就把这个换到另一条
    while(p1 && p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    !p1 && (p1 = headB);
    !p2 && (p2 = headA);
    // 此时已经有一个到终点了，但另一个还没到终点，所以继续同步走，如果那一个到终点了，就换
    while(p1 && p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    !p1 && (p1 = headB);
    !p2 && (p2 = headA);
    // 此时双方互换，且最终，走的路程是一样的，
    // 比如 headA 有 5 个节点，第 3 个节点是相交，headB 有 4个节点，第 2 个节点相交，
    // p1 走了：5 + 2 到该节点
    // p2 走了：4 + 3 到该节点
    while(p1 && p2) {
        if(p1 == p2) {
            return p1;
        } else {
            p1 = p1.next;
            p2 = p2.next;
        }
    }
    return null;
};