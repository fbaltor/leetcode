import { toArrayBuffer } from "jsr:@std/streams";

function majorityElement(nums: number[]): number | Error {
  const minimumMajorityCount = Math.floor(nums.length / 2) + 1;

  const count = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const currentCount = (count.get(nums[i]) || 0) + 1;

    if (currentCount === minimumMajorityCount) {
      return nums[i];
    }

    count.set(nums[i], currentCount);
  }

  return new Error("No majority found");
}

const solve = majorityElement;

const input = new TextDecoder().decode(
  await toArrayBuffer(Deno.stdin.readable),
);
const lines = input.trim().split("\n");

const paramCount = solve.length;

for (let i = 0; i < lines.length; i++) {
  if (i < lines.length) {
    // Parse the test case
    const nums = JSON.parse(lines[i]);

    let val;
    if (paramCount === 1) {
      // Function expects a single argument (likely an array)
      val = solve(nums);
    } else {
      // Function expects multiple individual arguments
      // Spread the array as individual parameters
      val = solve.apply(null, nums);
    }
    console.log(val, nums);
  }
}
