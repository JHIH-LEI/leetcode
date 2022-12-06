/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the
 * future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let currentMin = prices[0];
  prices.forEach((price) => {
    if (price < currentMin) {
      currentMin = price;
    } else if (price - currentMin > profit) {
      profit = price - currentMin;
    }
  });
  return profit;
};
