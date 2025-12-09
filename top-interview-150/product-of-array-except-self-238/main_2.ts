import * as readline from "node:readline/promises";
import { stdin as input } from "node:process";

const rl = readline.createInterface({ input, terminal: false });

for await (const line of rl) {
  const nums: number[] = JSON.parse(line);

  const answer = productExceptSelf(nums);

  console.log(answer);
}

function productExceptSelf(nums: number[]): number[] {
  let prefixRunningProduct = 1;
  const prefixProduct = nums.map((ele) =>
    prefixRunningProduct = prefixRunningProduct * ele
  );

  let suffixRunningProduct = 1;
  const suffixProduct = nums.toReversed().map((ele) =>
    suffixRunningProduct = suffixRunningProduct * ele
  ).toReversed();

  const product = new Array(nums.length);
  for (let i = 0; i < product.length; i++) {
    if (i === 0) {
      product[i] = suffixProduct[i + 1];
    } else if (i === product.length - 1) {
      product[i] = prefixProduct[i - 1];
    } else {
      product[i] = prefixProduct[i - 1] * suffixProduct[i + 1];
    }
  }

  return product;
}
