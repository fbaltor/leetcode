import * as readline from "node:readline/promises";
import { stdin as input } from "node:process";

function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) return nums.length;
  let k = 1;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k] || nums[i] !== nums[k - 1]) {
      nums[++k] = nums[i];
    }
  }
  return k + 1;
}

const rl = readline.createInterface({ input, terminal: false });

for await (const line of rl) {
  const nums = JSON.parse(line);

  const k = removeDuplicates(nums);

  console.log(k, nums);
}
