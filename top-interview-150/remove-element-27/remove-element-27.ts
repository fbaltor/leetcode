import { toArrayBuffer } from "jsr:@std/streams";

function removeElement(nums: number[], val: number): number {
  let left = 0, right = 0; 

  while (right < nums.length) {
    if (nums[right] !== val) {
      nums[left] = nums[right]
      left++
      right++
    } else {
      right++
    }
  }

  return left

};

const input = new TextDecoder().decode(
  await toArrayBuffer(Deno.stdin.readable),
);
const lines = input.trim().split("\n");

for (let i = 0; i < lines.length; i += 2) {
  if (i + 1 < lines.length) {
    // Parse the test case
    const nums = JSON.parse(lines[i]);
    const val = parseInt(lines[i + 1]);

    // Call the merge function
    const k = removeElement(nums, val);

    console.log(k);
    console.log(nums)
  }
}
