/**
  给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target，
  写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
  示例 1:
  输入: nums = [-1,0,3,5,9,12], target = 9     
  输出: 4       
  解释: 9 出现在 nums 中并且下标为 4     
  示例 2:
  输入: nums = [-1,0,3,5,9,12], target = 2     
  输出: -1        
  解释: 2 不存在 nums 中因此返回 -1
 */

// （版本一）左闭右闭区间 [left, right]
var search = function (nums, target) {
  // right是数组最后一个数的下标，num[right]在查找范围内，是左闭右闭区间
  let mid, left = 0, right = nums.length - 1;
  // 当left=right时，由于nums[right]在查找范围内，所以要包括此情况
  while (left <= right) {
    // 位运算 + 防止大数溢出
    // mid = left + ((right - left) >> 1);
    mid = left + Math.floor(((right - left) / 2));

    // 如果中间数大于目标值，要把中间数排除查找范围，所以右边界更新为mid-1；如果右边界更新为mid，那中间数还在下次查找范围内
    if (nums[mid] > target) {
      right = mid - 1;  // 去左面闭区间寻找
    } else if (nums[mid] < target) {
      left = mid + 1;   // 去右面闭区间寻找
    } else {
      return mid;
    }
  }
  return -1;
};

// （版本二）左闭右开区间 [left, right)
var search = function (nums, target) {
  // right是数组最后一个数的下标+1，nums[right]不在查找范围内，是左闭右开区间
  let mid, left = 0, right = nums.length;
  // 当left=right时，由于nums[right]不在查找范围，所以不必包括此情况
  while (left < right) {
    // 位运算 + 防止大数溢出
    mid = left + ((right - left) >> 1);
    // 如果中间值大于目标值，中间值不应在下次查找的范围内，但中间值的前一个值应在；
    // 由于right本来就不在查找范围内，所以将右边界更新为中间值，如果更新右边界为mid-1则将中间值的前一个值也踢出了下次寻找范围
    if (nums[mid] > target) {
      right = mid;  // 去左区间寻找
    } else if (nums[mid] < target) {
      left = mid + 1;   // 去右区间寻找
    } else {
      return mid;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9))
