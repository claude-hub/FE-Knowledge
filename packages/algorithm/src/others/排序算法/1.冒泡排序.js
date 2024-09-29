
/**
 * 冒泡排序
 * 时间复杂度：O(n^2), 空间复杂度：O(1), 稳定
 */

// 每一轮，最大的数 “沉底”
const bubbleSort = (arr) => {
  const len = arr.length;

  if (len <= 1) return arr;

  for (let i = 0; i < len - 1; i++) {
    // 设置标记位
    let hasChanged = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // 如果一次交换都没有发生，当前循环中的数组其实是已经排好序了
        // case: [6, 1, 2, 3, 4]，把 6 沉底到最后的时候，其实数组已经排好序了，不需要再次排序
        hasChanged = true;
      }
    }
    if (!hasChanged) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort([8, 25, 7, 83, 20, 254, 3456, 40, 56, 45, 76, 1, 4, 70]))

console.log(bubbleSort([6, 1, 2, 3, 4]))
