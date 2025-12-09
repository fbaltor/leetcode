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

function suffixSum(array: number[]): number[] {
  const suffix = new Array(array.length);
  let currentSum = 0;
  for (let i = suffix.length - 1; 0 <= i; i--) {
    suffix[i] = array[i] + currentSum;
    currentSum = suffix[i];
  }

  return suffix;
}

const inputSuffixSum = [1, 2, 3, 4];
const outputSuffixSum = suffixSum(inputSuffixSum);
const expectedSuffixSum = [10, 9, 7, 4];
assert.deepStrictEqual(outputSuffixSum, expectedSuffixSum);

function prefixProduct(array: number[]): number[] {
  const prefix = new Array(array.length);
  let currentProduct = 1;
  for (let i = 0; i < prefix.length; i++) {
    prefix[i] = currentProduct * array[i];
    currentProduct = prefix[i];
  }

  return prefix;
}

const inputPrefixProduct = [1, 2, 3, 4];
const outputPrefixProduct = prefixProduct(inputPrefixProduct);
const expectedPrefixProduct = [1, 2, 6, 24];
assert.deepStrictEqual(outputPrefixProduct, expectedPrefixProduct);

function suffixProduct(array: number[]): number[] {
  const suffix = new Array(array.length);
  let currentProduct = 1;
  for (let i = suffix.length - 1; 0 <= i; i--) {
    suffix[i] = currentProduct * array[i];
    currentProduct = suffix[i];
  }

  return suffix;
}

const inputSuffixProduct = [1, 2, 3, 4];
const outputSuffixProduct = suffixProduct(inputSuffixProduct);
const expectedSuffixProduct = [24, 24, 12, 4];
assert.deepStrictEqual(outputSuffixProduct, expectedSuffixProduct);
