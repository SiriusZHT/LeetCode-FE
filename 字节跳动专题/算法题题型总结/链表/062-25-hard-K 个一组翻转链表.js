// 【字节005】25. K个一组翻转链表
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  	// 先统计当前组 是否满足 长度大于等于k 能翻转
    let count = 0,
        pointer = head;
    while(pointer !== null && count < k) {
        pointer = pointer.next;
        count++;
    }
    // 不能翻转，直接 return head
    if(count < k) {
        return head;
    }
    // 进入翻转链表环节，pre cur 迭代 k 次
    let cur = head, pre = null;
    for(let i = 0; i < k; i++) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    // 当前 head 在翻转后指向的是 null
    // 这里直接连接后续链表
    head.next = reverseKGroup(cur, k);
    // pre 才是最终翻转后的头节点
    return pre; 
};