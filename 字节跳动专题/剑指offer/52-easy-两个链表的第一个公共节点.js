// 剑指 Offer 52. 两个链表的第一个公共节点Copy for Markdown
// 输入两个链表，找出它们的第一个公共节点。

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let a = headA,
    b = headB;
  while (a != b) {
    // a 走一步，如果走到 headA 链表末尾，转到 headB 链表
    a = a != null ? a.next : headB;
    // b 走一步，如果走到 headB 链表末尾，转到 headA 链表
    b = b != null ? b.next : headA;
  }
  return a;
};

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/solution/tu-jie-shuang-zhi-zhen-ji-qiao-fei-chang-pkff/

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
    let cur = headA;
    while(cur != null) {
        cur.color = "red";
        cur = cur.next;
    }
    cur = headB;
    while(cur != null){
        if(cur.color){
            return cur;
        }
        cur = cur.next;
    }
    return cur;
};

// 作者：sirius