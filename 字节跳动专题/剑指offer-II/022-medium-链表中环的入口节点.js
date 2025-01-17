// 剑指 Offer II 022. 链表中环的入口节点
// 给定一个链表，返回链表开始入环的第一个节点。 从链表的头节点开始沿着 next 指针进入环的第一个节点为环的入口节点。如果链表无环，则返回 null。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

// 说明：不允许修改给定的链表。

 

// 示例 1：



// 输入：head = [3,2,0,-4], pos = 1
// 输出：返回索引为 1 的链表节点
// 解释：链表中有一个环，其尾部连接到第二个节点。
// 示例 2：



// 输入：head = [1,2], pos = 0
// 输出：返回索引为 0 的链表节点
// 解释：链表中有一个环，其尾部连接到第一个节点。
// 示例 3：



// 输入：head = [1], pos = -1
// 输出：返回 null
// 解释：链表中没有环。

// 注意：本题与主站 142 题相同： https://leetcode-cn.com/problems/linked-list-cycle-ii/


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
// 思路
// a：环外的长度
// b：slow走了b的距离 与 a 相遇
// c：slow走剩下的长度 = 圈的总长度 - b
// fast已经走完了环的n圈 因此走过的总距离：a + n(b+c) + b = a + (n+1)b + nc
// 因为fast比slow走快2倍
// 所以a + (n+1)b + nc = 2(a+b) => a = c + (n-1)(b+c)
// 就会发现：从相遇点 到 入环点 的距离 + n-1圈 的环长 == 链表头部 到 入环点的距离
// 当slow和fast相遇时 再额外用一个指针ptr 指向链表头部 然后跟slow每次移动一个位置 就能在入环点相遇
function detectCycle(head) {
    let [slow, fast] = [head, head];
    // 判断是否存在环路
    do {
        // 如果fast或者fast的下一位到尽头了 也就是说 当前fast是尽头 或者 fast的下一个fast是尽头
        // 没有环路
        if (!fast || !fast.next) {
            return null;
        }
        fast = fast.next.next;
        slow = slow.next;
    } while (fast != slow);
    // 如果存在 查找环路节点
    let ptr = head;
    while (ptr != slow) {
        slow = slow.next;
        ptr = ptr.next;
    }
    return ptr;
}

