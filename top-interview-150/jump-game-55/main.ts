import { toArrayBuffer } from "jsr:@std/streams";

function canJump(nums: number[]): boolean {
  if (nums.length == 1) return true;
  if (nums[0] == 0) return false;

  let i = 0;
  let stucked = false;
  while (!stucked) {
    stucked = true;
    const currentMaxJump = nums[i];

    if (nums.length - 1 <= currentMaxJump + i) {
      return true;
    }

    let jumpTo = i + 1;
    let biggestJump = nums[jumpTo];
    for (let j = i + 1; j < i + currentMaxJump; j++) {
      if (nums[j] + (j - i) >= biggestJump) {
        biggestJump = nums[j] + (j - i);
        jumpTo = j;
      }
    }

    if (biggestJump != 0) {
      stucked = false;
      i = jumpTo;
    }
  }

  return false;
}

const input = new TextDecoder().decode(
  await toArrayBuffer(Deno.stdin.readable),
);
const lines = input.trim().split("\n");

for (let i = 0; i < lines.length; i++) {
  const nums = JSON.parse(lines[i]);
  const result = canJump(nums);
  console.log(result);
}
