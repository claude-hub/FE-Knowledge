/**
  给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
  你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
  返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

  示例 1：
  输入：[7,1,5,3,6,4]
  输出：5
  解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
  
  示例 2：
  输入：prices = [7,6,4,3,1]
  输出：0
  解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 */

/**
  思路：
  从左到右枚举卖出价格 prices[i]，那么要想获得最大利润，
  我们需要知道第 i 天之前，股票价格的最小值是什么，
  也就是从 prices[0] 到 prices[i−1] 的最小值，把它作为买入价格，这可以用一个变量 minPrice 维护。
 */
var maxProfit = function (prices) {
  let res = 0;
  if (prices.length === 0) return 0;
  let minPice = prices[0];

  prices.forEach(price => {
    res = Math.max(res, price - minPice);
    minPice = Math.min(minPice, price);
  });

  return res;
};