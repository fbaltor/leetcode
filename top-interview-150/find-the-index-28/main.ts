import * as readline from "node:readline/promises";
import { stdin as input } from "node:process";

const rl = readline.createInterface({ input, terminal: false });

const lines = rl[Symbol.asyncIterator]();

while (true) {
  const haystackLine = await lines.next();
  if (haystackLine.done) break;

  const needleLine = await lines.next();
  if (needleLine.done) break;

  const haystack = haystackLine.value.trim();
  const needle = needleLine.value.trim();

  console.log(strStr(haystack, needle));
}

// Super inefficient - O(m * n)! Should look for KMP solution with O(m + n)
function strStr(haystack: string, needle: string): number {
  let i = 0;
  let j = i;
  while (i < haystack.length) {
    while (j - i < needle.length && haystack[j] === needle[j - i]) {
      j++;
    }

    if (j - i === needle.length) return i;

    i++;
    j = i;
  }

  return -1;
}
