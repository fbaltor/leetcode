import { toArrayBuffer } from "jsr:@std/streams";

function maxProfit(prices: number[]): number {
  let profit = 0;
  let maxProfit = profit;
  let minimumPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    profit = prices[i] - minimumPrice;
    if (profit > maxProfit) maxProfit = profit;

    if (prices[i] < minimumPrice) minimumPrice = prices[i];
  }

  return maxProfit;
}

function _maxProfitBruteForce(prices: number[]): number {
  let profit = 0;
  let maxProfit = profit;

  for (let left = 0; left < prices.length; left++) {
    for (let right = left; right < prices.length; right++) {
      profit = prices[right] - prices[left];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}

const input = new TextDecoder().decode(
  await toArrayBuffer(Deno.stdin.readable),
);
const lines = input.trim().split("\n");

for (let i = 0; i < lines.length; i++) {
  const nums = JSON.parse(lines[i]);
  const profit = maxProfit(nums);
  console.log(profit);
}
