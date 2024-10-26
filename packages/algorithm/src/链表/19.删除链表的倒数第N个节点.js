/**
  给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
  进阶：你能尝试使用一趟扫描实现吗？
 */

// 双指针的经典应用，如果要删除倒数第n个节点，让fast移动n步，然后让fast和slow同时移动，直到fast指向链表末尾。删掉slow所指向的节点就可以了。

var removeNthFromEnd = function (head, n) {
  // 创建哨兵节点，简化解题逻辑
  let dummyHead = new ListNode(0, head);
  let fast = dummyHead;
  let slow = dummyHead;
  while (n--) fast = fast.next;
  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummyHead.next;
};
