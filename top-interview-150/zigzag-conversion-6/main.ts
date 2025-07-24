import { toArrayBuffer } from "jsr:@std/streams";

function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  const period = 2 * numRows - 2;

  const newWordsPerLine = new Array<string>(numRows).fill("");

  const lineFromOriginalPosition = (index: number, period: number): number => {
    const r = index % period;
    return r < numRows ? r : period - r;
  };

  for (let i = 0; i < s.length; i++) {
    const newLine = lineFromOriginalPosition(i, period);
    newWordsPerLine[newLine] += s[i];
  }

  const convertedString = newWordsPerLine.reduce(
    (accStr, word) => accStr += word,
    "",
  );

  return convertedString;
}

const input = new TextDecoder().decode(
  await toArrayBuffer(Deno.stdin.readable),
);
const lines = input.trim().split("\n");

for (let i = 0; i < lines.length; i += 2) {
  const s = JSON.parse(lines[i]);
  const numRows = parseInt(lines[i + 1]);

  const convertedString = convert(s, numRows);
  console.log(convertedString);
}
