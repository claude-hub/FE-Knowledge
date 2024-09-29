/**
 * 选择排序
 * 时间复杂度：O(n^2), 空间复杂度：O(1), 不稳定。
 */

// 每次循环寻找最小值的下标，然后和当前循环下标进行交换
const selectSort = (arr) => {
  const len = arr.length;
  if (len <= 1) return arr;

  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;

    // 寻找最小值的索引
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 然后和当前的索引进行交换
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
};

const arr = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
selectSort(arr);
console.log(arr);