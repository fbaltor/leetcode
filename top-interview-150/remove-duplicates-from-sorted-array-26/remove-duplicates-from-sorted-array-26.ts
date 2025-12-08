import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

function removeDuplicates(nums: number[]): number {
  const unique = new Set<number>();

  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (!unique.has(nums[left])) {
      unique.add(nums[left]);
      left++;
    } else if (!unique.has(nums[right])) {
      unique.add(nums[right]);
      nums[left] = nums[right];
      left++;
    }
  }

  return left;
}

const rl = readline.createInterface({ input, output, terminal: false });

for await (const line of rl) {
  const nums = JSON.parse(line);

  // Call the merge function
  const k = removeDuplicates(nums);

  console.log(k, nums);
}
