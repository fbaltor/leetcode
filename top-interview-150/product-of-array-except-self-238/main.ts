import { toArrayBuffer } from "jsr:@std/streams";

function productExceptSelf(nums: number[]): number[] {
  const zeros = nums.filter((ele) => ele === 0);
  if (zeros.length >= 2) {
    return new Array<number>(nums.length).fill(0);
  }

  const productWithoutZero = nums.reduce((
    acc,
    ele,
  ) => ele !== 0 ? acc * ele : acc, 1);

  if (zeros.length == 1) {
    return nums.map((ele) => ele !== 0 ? 0 : productWithoutZero);
  }

  return nums.map((ele) => productWithoutZero / ele);
}

const input = new TextDecoder().decode(
  await toArrayBuffer(Deno.stdin.readable),
);
const lines = input.trim().split("\n");

for (let i = 0; i < lines.length; i++) {
  // Parse the test case
  const nums = JSON.parse(lines[i]);

  const products = productExceptSelf(nums);

  console.log(products);
}
