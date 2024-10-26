/**
  假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
  每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
  示例 1：
  输入：n = 2
  输出：2
  解释：有两种方法可以爬到楼顶。
  1. 1 阶 + 1 阶
  2. 2 阶
  示例 2：
  输入：n = 3
  输出：3
  解释：有三种方法可以爬到楼顶。
  1. 1 阶 + 1 阶 + 1 阶
  2. 1 阶 + 2 阶
  3. 2 阶 + 1 阶
 */

/**
 * 五部曲
 * dp[i]: 达到 第 i 阶有 dp[i] 种方法
 * 递推公式：dp[i] = dp[i-2] + dp[i-1]
 * dp初始化：dp[1] = 1, dp[2] = 2
 * 遍历顺序：从前往后
 * 打印 dp 数组
 */

var climbStairs = function (n) {
  if (n <= 2) return n;
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];
};


console.log(climbStairs(10))

// 一步一个台阶，两个台阶，三个台阶，直到 m 个台阶，有多少种方法爬到 n 阶楼顶。（完全背包的思想）
var climbStairs = function (n, m) {
  if (n <= 2) return n;
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) { // 把m换成2，就可以AC爬楼梯这道题
      if (i - j >= 0) dp[i] += dp[i - j];
    }
  }
  return dp[n];
}

console.log(climbStairs(10, 2))