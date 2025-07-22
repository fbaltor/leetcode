import { toArrayBuffer } from "jsr:@std/streams";

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

const input = new TextDecoder().decode(
  await toArrayBuffer(Deno.stdin.readable),
);
const lines = input.trim().split("\n");

for (let i = 0; i < lines.length; i++) {
  if (i < lines.length) {
    // Parse the test case
    const nums = JSON.parse(lines[i]);

    // Call the merge function
    const k = removeDuplicates(nums);

    console.log(k, nums);
  }
}
