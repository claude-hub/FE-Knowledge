/**
 * 插入排序
 * 时间复杂度：O(n^2), 空间复杂度：O(1), 稳定
 */

// 从第一个下标开始，依次和前面的比较。把小的元素往前移动，直到找到一个比当前元素小的位置。
const insortSort = (arr) => {
  const len = arr.length;

  if (len <= 1) return arr;

  let current;
  let preIndex;

  for (let i = 1; i < len; i++) {
    // 当前元素
    current = arr[i];
    // 当前元素的前一个元素索引
    preIndex = i - 1;

    // 如果前一个元素的值，大于了当前元素，则将前一个元素后移一位，直到找到一个比当前元素小的值，
    // 或者找到数组的开始位置
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }

    arr[preIndex + 1] = current;
  }

  return arr;
}


console.log(insortSort([36, 4, 2, 5, 7, 1]))

// 折半插入排序，二分法
