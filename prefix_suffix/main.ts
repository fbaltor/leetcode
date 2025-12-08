import * as assert from "node:assert/strict";

function prefixSum(array: number[]): number[] {
  const prefix: number[] = new Array(array.length);
  let currentSum = 0;
  for (let i = 0; i < prefix.length; i++) {
    prefix[i] = array[i] + currentSum;
    currentSum = prefix[i];
  }
  return prefix;
}

const inputPrefixSum = [1, 2, 3, 4];
const outputPrefixSum = prefixSum(inputPrefixSum);

const expectedPrefixSum = [1, 3, 6, 10];

assert.deepStrictEqual(outputPrefixSum, expectedPrefixSum);
