/**
  题意：给定两个数组，编写一个函数来计算它们的交集。
 */
var intersection = function (nums1, nums2) {
  const nums1Set = new Set(nums1);
  const resSet = new Set();
  // 循环 比 迭代器快
  for (let i = nums2.length - 1; i >= 0; i--) {
    nums1Set.has(nums2[i]) && resSet.add(nums2[i]);
  }
  return Array.from(resSet);
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
