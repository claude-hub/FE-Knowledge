/**
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
你可以按任意顺序返回答案。

示例 1：
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]
 */

var twoSum = function (nums, target) {
  // for (let i = 0, len = nums.length; i < len; i++) {
  //   // 因为同一元素不允许重复出现，所以从i的下一位开始遍历
  //   for (let j = i + 1; j < len; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }

  const prevNums = {};                    // 存储出现过的数字，和对应的索引  
  // 结果中可能存在多对
  const reslut = [];

  for (let i = 0; i < nums.length; i++) {       // 遍历元素   
    const curNum = nums[i];                     // 当前元素   
    const targetNum = target - curNum;          // 满足要求的目标元素   
    const targetNumIndex = prevNums[targetNum]; // 在prevNums中获取目标元素的索引

    if (targetNumIndex !== undefined) {         // 如果存在，直接返回 [目标元素的索引,当前索引]
      reslut.push([targetNumIndex, i]);
    } else {                                    // 如果不存在，说明之前没出现过目标元素
      prevNums[curNum] = i;                     // 存入当前的元素和对应的索引
    }
  }

  return reslut;
};

console.log('两数之和:', twoSum([1, 2, 6, 7, 11, 15], 13));