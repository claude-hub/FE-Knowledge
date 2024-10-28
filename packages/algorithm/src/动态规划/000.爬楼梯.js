/**
 * 509. 斐波那契数
  F(0) = 0，F(1) = 1
  F(n) = F(n - 1) + F(n - 2)，其中 n > 1
 */
var fib = function (n) {
  const dp = new Array(n).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
console.log(fib(10))

/**
 * 70. 爬楼梯
 */
var climbStairs = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
console.log(climbStairs(10))

/**
 * 爬楼梯进阶，一次性可以爬 m 阶
 */
var climbStairs = function (n, m) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < m; j++) {
      if (i - j > 0) {
        dp[i] += dp[i - j]
      }
    }
  }
  return dp[n];
};
console.log(climbStairs(10))

/**
 * 746. 最小花费爬楼梯
 */
var minCostClimbingStairs = function (cost = []) {
  const dp = new Array(cost.length).fill(0);
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }
  return dp[cost.length]
};
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))


/**
  322. 零钱兑换
  输入：coins = [1, 2, 5], amount = 11
  输出：3 
  解释：11 = 5 + 5 + 1
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    coins.forEach(coin => {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    });
  }
  return dp[amount] > amount ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11))

