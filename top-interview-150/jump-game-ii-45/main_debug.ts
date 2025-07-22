import { toArrayBuffer } from "jsr:@std/streams";

function jump(nums: number[]): number {
  console.log(`Starting jump function with nums: [${nums.join(", ")}]`);

  if (nums.length == 1) {
    console.log("Array length is 1, returning 0");
    return 0;
  }

  let jumps = 0;
  let i = 0;
  console.log(`Initial position: i=${i}, jumps=${jumps}`);

  while (i != nums.length - 1) {
    console.log(`\n--- Jump iteration ${jumps + 1} ---`);
    console.log(`Current position: i=${i}, value=${nums[i]}`);

    const currentMaxJump = nums[i];
    console.log(
      `Maximum jump distance from current position: ${currentMaxJump}`,
    );

    let bestJump = i + 1;
    let jumpScore = nums[bestJump];
    console.log(
      `Initial best jump: position=${bestJump}, score=${jumpScore} (value=${
        nums[bestJump]
      } + distance=1)`,
    );

    for (let j = 1; j < currentMaxJump; j++) {
      console.log(
        `  Checking jump to position ${i + j}: value=${
          nums[i + j]
        }, distance=${j}, score=${nums[i + j] + j}`,
      );

      if (nums[i + j] + j >= jumpScore) {
        jumpScore = nums[i + j] + j;
        bestJump = i + j;
        console.log(
          `    New best jump found: position=${bestJump}, score=${jumpScore}`,
        );
      }
    }

    i = bestJump;
    jumps++;
    console.log(`Jumping to position ${i}, total jumps: ${jumps}`);
  }

  console.log(`\nReached end of array! Total jumps: ${jumps}`);
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
