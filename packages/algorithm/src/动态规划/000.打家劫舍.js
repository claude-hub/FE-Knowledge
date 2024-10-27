/**
 * 198. 打家劫舍，相邻的房间会报警
 输入：[2,7,9,3,1]
 输出：12
 */
var rob = function (nums = []) {
  const dp = new Array(nums.length + 1).fill(0);
  dp[1] = nums[0]
  for (let i = 2; i <= nums.length; i++) {
    // 要么就是 n-1 房屋可盗窃的最大值，
    // 要么就是 n-2 房屋可盗窃的最大值加上当前房屋的值，二者之间取最大值
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
  }
  return dp[nums.length];
};

console.log(rob([2, 7, 9, 3, 1]))

/**
 * 213. 打家劫舍 II，相邻的房间会报警，首尾房间是连起的
 输入：nums = [2,3,2]
 输出：3
 */

var rob2 = function (nums = []) {
  // 如果不偷nums[0], 则变为 num[1] 到 末尾 的最大值
  const case1 = nums.slice(1);
  // 如果偷 nums[0], 则变为 nums[2] 到 nums[n-1] 的最大值
  const case2 = nums.slice(2, nums.length - 1);
  return Math.max(rob(case1), rob(case2) + nums[0]);
};

console.log(rob2([2, 3, 2]))

/**
 * 337. 打家劫舍 III
 */
const rob3 = root => {
  // 后序遍历函数
  const postOrder = node => {
    // 递归出口
    if (!node) return [0, 0];
    // 遍历左子树
    const left = postOrder(node.left);
    // 遍历右子树
    const right = postOrder(node.right);
    // 不偷当前节点，左右子节点都可以偷或不偷，取最大值
    const DoNot = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    // 偷当前节点，左右子节点只能不偷
    const Do = node.val + left[0] + right[0];
    // [不偷，偷]
    return [DoNot, Do];
  };
  const res = postOrder(root);
  // 返回最大值
  return Math.max(...res);
};
