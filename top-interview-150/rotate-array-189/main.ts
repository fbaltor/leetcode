import * as readline from "node:readline/promises";
import { stdin as input } from "node:process";

const rl = readline.createInterface({ input, terminal: false });

const lines = rl[Symbol.asyncIterator]();

while (true) {
  const numsLine = await lines.next();
  if (numsLine.done) break;

  const kLine = await lines.next();
  if (kLine.done) break;

  const nums = JSON.parse(numsLine.value);
  const k = JSON.parse(kLine.value);

  rotate(nums, k);
  console.log(nums);
}

function reverseSubArrayInPlace(
  start: number,
  end: number,
  array: number[],
): void {
  let i = start, j = end, tmp;
  while (i < j) {
    tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
    i++;
    j--;
  }
}

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const rot = k % nums.length;

  reverseSubArrayInPlace(0, nums.length - 1, nums);
  reverseSubArrayInPlace(0, rot - 1, nums);
  reverseSubArrayInPlace(rot, nums.length - 1, nums);
}
