/**
  设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。
  请实现 KthLargest 类：
  KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
  int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。
  示例 1：
  输入：
  ["KthLargest", "add", "add", "add", "add", "add"]
  [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
  输出：[null, 4, 5, 5, 8, 8]
  解释：
  KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
  kthLargest.add(3); // 返回 4
  kthLargest.add(5); // 返回 5
  kthLargest.add(10); // 返回 5
  kthLargest.add(9); // 返回 8
  kthLargest.add(4); // 返回 8
  示例 2：
  输入：
  ["KthLargest", "add", "add", "add", "add"]
  [[4, [7, 7, 7, 7, 8, 3]], [2], [10], [9], [9]]
  输出：[null, 7, 7, 7, 8]
  解释：
  KthLargest kthLargest = new KthLargest(4, [7, 7, 7, 7, 8, 3]);
  kthLargest.add(2); // 返回 7
  kthLargest.add(10); // 返回 7
  kthLargest.add(9); // 返回 7
  kthLargest.add(9); // 返回 8
 */

var KthLargest = function (k, nums) {
  this.k = k;
  this.heap = new MinHeap();
  for (const x of nums) {
    this.add(x);
  }
};

KthLargest.prototype.add = function (val) {
  this.heap.offer(val);
  if (this.heap.size() > this.k) {
    this.heap.poll();
  }
  return this.heap.peek();
};

class MinHeap {
  constructor(data = []) {
    this.data = data;
    this.comparator = (a, b) => a - b;
    this.heapify();
  }

  heapify() {
    if (this.size() < 2) return;
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }

  peek() {
    if (this.size() === 0) return null;
    return this.data[0];
  }

  offer(value) {
    this.data.push(value);
    this.bubbleUp(this.size() - 1);
  }

  poll() {
    if (this.size() === 0) {
      return null;
    }
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return result;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;
      if (
        leftIndex <= lastIndex &&
        this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex;
      }
      if (
        rightIndex <= lastIndex &&
        this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex;
      }
      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
  }

  size() {
    return this.data.length;
  }
}
