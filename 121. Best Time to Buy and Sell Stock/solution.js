/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let lowestPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < lowestPrice) lowestPrice = prices[i];
    if (prices[i] - lowestPrice > maxProfit)
      maxProfit = prices[i] - lowestPrice;
  }

  return maxProfit;
};
