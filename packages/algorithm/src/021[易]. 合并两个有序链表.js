/**
  将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
  示例 1：
  输入：l1 = [1,2,4], l2 = [1,3,4]
  输出：[1,1,2,3,4,4]
  示例 2：
  输入：l1 = [], l2 = []
  输出：[]
  示例 3：
  输入：l1 = [], l2 = [0]
  输出：[0]
 */

// 递归法  TC:O(m+n)  SC:O(m+n)
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2
  if (!list2) return list1
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  }
  else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}


// 迭代法   TC:O(m+n)  SC:O(1)
var mergeTwoLists = function (list1, list2) {
  const head = new ListNode(-1)
  let prev = head
  while (list1 && list2) {
    if (list1.val < list2.val) {
      prev.next = list1
      list1 = list1.next
    } else {
      prev.next = list2
      list2 = list2.next
    }
    prev = prev.next
  }
  prev.next = list1 ? list1 : list2
  return head.next
}
