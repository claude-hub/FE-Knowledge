/**
  题目难易：中等
  给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
  注意: 每个数组中的元素不会超过 100 数组的大小不会超过 200
  示例 1:
  输入: [1, 5, 11, 5]
  输出: true
  解释: 数组可以分割成 [1, 5, 5] 和 [11].
 */

var canPartition = function (nums) {
  const sum = (nums.reduce((p, v) => p + v));
  if (sum & 1) return false;
  const dp = Array(sum / 2 + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = sum / 2; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
      if (dp[j] === sum / 2) {
        return true;
      }
    }
  }
  return dp[sum / 2] === sum / 2;
};
