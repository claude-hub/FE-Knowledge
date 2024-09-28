// 1. 标记法判断是否有环
const hasCircle = (head) => {
  while (head) {
    if (head.flag) return true;

    head.flag = true;
    head = head.next;
  }

  return false;
};

// 2. JSON.stringify 判断
const hasCircle2 = (head) => {
  try {
    JSON.stringify(head);
    return false;
  } catch {
    return true;
  }
};

// 3. 快慢指针
const hasCircle3 = (head) => {
  if (!head || !head.next) return false;
  let slow = head.next;
  let fast = head.next.next;

  while (fast !== slow) {
    if(!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};