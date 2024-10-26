/**
  斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
  F(0) = 0，F(1) = 1
  F(n) = F(n - 1) + F(n - 2)，其中 n > 1
  给定 n ，请计算 F(n) 。 
 */

/**
 * 五部曲
 * 确定 DP[i] 的含义： 第i个斐波那契数
 * 递推公式：dp[i] = dp[i-1] + dp[i-2]
 * dp数组的初始化：dp[0] = 0, dp[1] = 1
 * 遍历顺序：从前向后
 * 打印 dp 数组
 */

var fib = function (n) {
  if (n <= 1) return n;
  let dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

var fib = function (n) {
  if (n === 0 || n === 1) {
    return n;
  }
  // 分别代表 dp[i - 1] 和 dp[i - 2]
  let dp_i_1 = 1, dp_i_2 = 0;

  for (let i = 2; i <= n; i++) {
    // dp[i] = dp[i - 1] + dp[i - 2];
    let sum = dp_i_1 + dp_i_2;
    // 滚动更新
    dp_i_2 = dp_i_1;
    dp_i_1 = sum;
  }
  return dp_i_1;
}

