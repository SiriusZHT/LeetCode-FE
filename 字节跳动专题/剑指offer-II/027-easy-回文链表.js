// 剑指 Offer II 027. 回文链表
// 给定一个链表的 头节点 head ，请判断其是否为回文链表。

// 如果一个链表是回文，那么链表节点序列从前往后看和从后往前看是相同的。

// 示例 1：

// 输入: head = [1,2,3,3,2,1]
// 输出: true
// 示例 2：

// 输入: head = [1,2]
// 输出: false
 

// 提示：

// 链表 L 的长度范围为 [1, 105]
// 0 <= node.val <= 9
 

// 进阶：能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

// 注意：本题与主站 234 题相同：https://leetcode-cn.com/problems/palindrome-linked-list/

// 方法一：反转链表
const isPalindrome = (head) => {
  if (head == null || head.next == null) {
    return true;
  }
  let fast = head;
  let slow = head;
  let prev;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;  // 断成两个链表
  // 翻转后半段
  let head2 = null;
  while (slow) {
    const tmp = slow.next;
    slow.next = head2;
    head2 = slow;
    slow = tmp;
  }
  // 比对
  while (head && head2) {
    if (head.val != head2.val) {
      return false;
    }
    head = head.next;
    head2 = head2.next;
  }
  return true;
};

// 方法二：栈（待补充）