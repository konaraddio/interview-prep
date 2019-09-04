/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    minPrice = minPrice > prices[i] ? prices[i] : minPrice;
    const profit = prices[i] - minPrice;
    maxProfit = maxProfit < profit ? profit : maxProfit;
  }

  return maxProfit;
};
