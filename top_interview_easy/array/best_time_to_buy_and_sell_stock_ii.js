/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  return prices.reduce((profit, current, index) => {
    next = prices[index + 1];

    if (index == prices.length - 1) return profit;

    if (next > current) {
      profit += next - current;
    }

    return profit;
  }, 0);
};
