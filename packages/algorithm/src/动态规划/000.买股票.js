/**
 * 121. 买卖股票的最佳时机，只买一次
  输入：[7,1,5,3,6,4]
  输出：5
 */
var maxProfit = function (prices = []) {
  let profit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i])
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

/**
 * 122.买卖股票的最佳时机II，每一天都可以买卖，求最大利润。可以买卖无数次
  输入: [7,1,5,3,6,4]
  输出: 7
 */
// 贪心算法，有盈利有买卖。
var maxProfit2 = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    const tmp = prices[i] - prices[i - 1];
    if (tmp > 0) {
      profit += tmp
    }
  }
  return profit;
};
// 动态规划
var maxProfit2 = function (prices = []) {
  const dp = new Array(prices.length).fill(0).map(v => new Array(2).fill(0));

  // i 为 不持有的收益，j为 持有时的收益
  dp[0][0] = 0, dp[0][1] = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    // 第 i 天不持有可获得的最大利润，前一天也不持有，或者前一天持有，今天卖出
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    // 第 i 天持有可获得的最大利润，前一天也持有，或者前一天不持有，今天买入
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[prices.length - 1][0];

}
console.log(maxProfit2([7, 1, 5, 3, 6, 4]))

/**
 * 309. 买卖股票的最佳时机含冷冻期
 */

/**
 * 714. 买卖股票的最佳时机含手续费
  输入：prices = [1, 3, 2, 8, 4, 9], fee = 2
  输出：8
 */
var maxProfitWithFee = function (prices = [], fee) {
  const dp = new Array(prices.length).fill(0).map(() => new Array(2).fill(0));
  // i，不持有
  dp[0][0] = 0;
  // j，持有
  dp[0][1] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    // 不持有
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
    // 持有
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[prices.length - 1][0];
};
console.log(maxProfitWithFee([1, 3, 2, 8, 4, 9], 2))

/**
 * 309. 买卖股票的最佳时机含冷冻期。卖出后，有一天的冷冻期
 */
function maxProfit4(prices) {
  // 第i天状态 持股 卖出 非冷冻期(不持股) 处于冷冻期
  const dp = new Array(prices.length).fill(0).map(() => [0, 0, 0, 0]);
  dp[0][0] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    // 持股
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
    // 卖出
    dp[i][1] = dp[i - 1][0] + prices[i];
    // 非冷冻期（不持股）
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1]);
    // 冷冻期（上一天卖出）
    dp[i][3] = dp[i - 1][1];
  }
  return Math.max(...dp.pop());
};

/**
 * 123. 买卖股票的最佳时机 III, [难]。最多买两次
 */
const maxProfit3 = prices => {
  const len = prices.length;
  const dp = new Array(len).fill(0).map(x => new Array(5).fill(0));
  dp[0][1] = -prices[0];
  dp[0][3] = -prices[0];
  for (let i = 1; i < len; i++) {
    dp[i][0] = dp[i - 1][0];
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]);
    dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]);
  }
  return dp[len - 1][4];
};
console.log(maxProfit3([3, 3, 5, 0, 0, 3, 1, 4]))