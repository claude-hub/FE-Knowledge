/**
  给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 */
// 双指针：
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let pre = null, cur = head;
  while (cur) {
    const temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  // temp = cur = null;
  return pre;
};
