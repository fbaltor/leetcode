import { toArrayBuffer } from "jsr:@std/streams";

function longestCommonPrefix(strs: string[]): string {
  let commonPrefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const currentString = strs[i];
    for (let j = 0; j < commonPrefix.length; j++) {
      if (currentString[j] !== commonPrefix[j] || currentString.length <= j) {
        if (j == 0) return "";

        commonPrefix = commonPrefix.slice(0, j);
      }
    }
  }

  return commonPrefix;
}

const input = new TextDecoder().decode(
  await toArrayBuffer(Deno.stdin.readable),
);
const lines = input.trim().split("\n");

for (let i = 0; i < lines.length; i++) {
  const strs = JSON.parse(lines[i]);

  console.log(longestCommonPrefix(strs));
}
