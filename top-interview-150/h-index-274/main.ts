import { toArrayBuffer } from "jsr:@std/streams";

function hIndex(citations: number[]): number {
  const numberOfPapersByCitationCount: number[] = new Array(1001).fill(0);

  for (let i = 0; i < citations.length; i++) {
    numberOfPapersByCitationCount[citations[i]] += 1;
  }

  for (
    let citationCount = numberOfPapersByCitationCount.length - 1;
    0 <= citationCount;
    citationCount--
  ) {
    if (citationCount < numberOfPapersByCitationCount.length - 1) {
      numberOfPapersByCitationCount[citationCount] +=
        numberOfPapersByCitationCount[citationCount + 1];
    }

    if (numberOfPapersByCitationCount[citationCount] >= citationCount) {
      return citationCount;
    }
  }

  return 0;
}

const input = new TextDecoder().decode(
  await toArrayBuffer(Deno.stdin.readable),
);
const lines = input.trim().split("\n");

for (let i = 0; i < lines.length; i++) {
  const citations = JSON.parse(lines[i]);
  const h = hIndex(citations);
  console.log(h);
}
