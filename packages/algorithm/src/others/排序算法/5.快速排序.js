/**
 * 快速排序
 * 时间复杂度：O(nlogn), 空间复杂度：O(logn), 不稳定
 * 
 * 自顶向下
 */

// 通过递归，找到中间值，然后递归左右子数组。
const quickSort = (arr) => {
  const len = arr.length;
  if (len <= 1) return arr;

  const pivotIndex = Math.floor(len / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}
