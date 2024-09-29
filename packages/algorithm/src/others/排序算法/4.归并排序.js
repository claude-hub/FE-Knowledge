/**
 * 归并排序
 * 时间复杂度 O(nlogn), 空间复杂度 O(n), 稳定
 * 
 * 自顶向上
 */

// 分而治之, 先拆分, 再合并
const mergeSort = (arr) => {
  const len = arr.length;
  if (len <= 1) return arr;

  const mid = Math.floor(len / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const res = [];
  while (left.length && right.length) {
    res.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  while (left.length) res.push(left.shift());

  while (right.length) res.push(right.shift());

  return res;
};


const arr = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
const res = mergeSort(arr);
console.log(res);
