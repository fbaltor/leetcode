import { toArrayBuffer } from "jsr:@std/streams";

function removeDuplicates(nums: number[]): number {
  const seen = new Map<number, number>();
  let writeIndex = 0;

  for (let readIndex = 0; readIndex < nums.length; readIndex++) {
    const currentElement = nums[readIndex];
    const currentCount = seen.get(currentElement) || 0;

    if (currentCount < 2) {
      nums[writeIndex] = currentElement;
      seen.set(currentElement, currentCount + 1);
      writeIndex++;
    }
  }

  return writeIndex;
}

function removeDuplicates2(nums: number[]): number {
  if (nums.length <= 2) return nums.length;
  let k = 1;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k] || nums[i] !== nums[k - 1]) {
      nums[++k] = nums[i];
    }
  }
  return k + 1;
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
    const k = removeDuplicates2(nums);

    console.log(k, nums);
  }
}
