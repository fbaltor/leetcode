import { toArrayBuffer } from "jsr:@std/streams";

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const placeholder = [];
  for (let i = 0; i < nums.length; i++) {
    let index = (nums.length - k + i) % nums.length;
    while (index < 0) {
      index += nums.length;
    }

    placeholder.push(nums[index]);
  }

  nums.length = 0;
  nums.push(...placeholder);
}

const input = new TextDecoder().decode(
  await toArrayBuffer(Deno.stdin.readable),
);
const lines = input.trim().split("\n");

for (let i = 0; i < lines.length; i += 2) {
  if (i + 1 < lines.length) {
    // Parse the test case
    const nums = JSON.parse(lines[i]);
    const k = parseInt(lines[i + 1]);

    // Call the merge function
    rotate(nums, k);

    console.log(nums);
  }
}
