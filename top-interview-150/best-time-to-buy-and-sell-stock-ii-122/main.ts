import { toArrayBuffer } from "jsr:@std/streams";

function maxProfit(prices: number[]): number {
  let profit = 0;

  let left = 0, right = 1;
  while (left < prices.length && right < prices.length) {
    if (prices[left] >= prices[right]) {
      left = right;
      right++;
    } else {
      profit += prices[right] - prices[left];
      left = right;
      right++;
    }
  }

  return profit;
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
