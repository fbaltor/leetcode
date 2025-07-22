import { toArrayBuffer } from "jsr:@std/streams";

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let i = 0,
    j = 0;

  const placeholder = [];
  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      placeholder.push(nums1[i]);
      i++;
    } else {
      placeholder.push(nums2[j]);
      j++;
    }
  }

  while (i < m) {
    placeholder.push(nums1[i]);
    i++;
  }

  while (j < n) {
    placeholder.push(nums2[j]);
    j++;
  }

  nums1.splice(0, m + n, ...placeholder);
};

const input = new TextDecoder().decode(
  await toArrayBuffer(Deno.stdin.readable),
);
const lines = input.trim().split("\n");

for (let i = 0; i < lines.length; i += 4) {
  if (i + 3 < lines.length) {
    // Parse the test case
    const nums1 = JSON.parse(lines[i]);
    const m = parseInt(lines[i + 1]);
    const nums2 = JSON.parse(lines[i + 2]);
    const n = parseInt(lines[i + 3]);

    // Call the merge function
    merge(nums1, m, nums2, n);

    console.log(nums1);
  }
}
