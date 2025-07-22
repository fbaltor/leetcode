import { toArrayBuffer } from "jsr:@std/streams";

function jump(nums: number[]): number {
  let jumps = 0;
  let i = 0;
  while (i != nums.length - 1) {
    const currentMaxJump = nums[i];

    if (nums.length - 1 <= currentMaxJump + i) {
      jumps++;
      return jumps;
    }

    let bestJump = i + 1;
    let bestJumpScore = nums[bestJump];
    for (let j = 1; j <= currentMaxJump; j++) {
      const currentScore = nums[i + j] + j;
      const canReachTheEndAlready = i + currentScore >= nums.length - 1;

      if (currentScore > bestJumpScore || canReachTheEndAlready) {
        bestJumpScore = currentScore;
        bestJump = i + j;
      }
    }

    i = bestJump;
    jumps++;
  }

  return jumps;
}

const input = new TextDecoder().decode(
  await toArrayBuffer(Deno.stdin.readable),
);
const lines = input.trim().split("\n");

for (let i = 0; i < lines.length; i++) {
  const nums = JSON.parse(lines[i]);
  const result = jump(nums);
  console.log(result);
}
