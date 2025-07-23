import { toArrayBuffer } from "jsr:@std/streams";

function candy(ratings: number[]): number {
  const candies = new Array<number>();

  for (let i = 0; i < ratings.length; i++) {
    if (i === 0) candies.push(1);
    else {
      if (ratings[i - 1] < ratings[i]) {
        candies.push(candies[candies.length - 1] + 1);
      } else {
        candies.push(1);
      }
    }
  }

  for (let i = ratings.length - 2; 0 <= i; i--) {
    const ratingIsIncrInRev = ratings[i] > ratings[i + 1];
    const candiesAreIncrInRev = candies[i] > candies[i + 1];
    if (ratingIsIncrInRev && !candiesAreIncrInRev) {
      candies[i] = candies[i + 1] + 1;
    }
  }

  return candies.reduce((acc, ele) => acc + ele, 0);
}

const input = new TextDecoder().decode(
  await toArrayBuffer(Deno.stdin.readable),
);
const lines = input.trim().split("\n");

for (let i = 0; i < lines.length; i++) {
  const ratings = JSON.parse(lines[i]);

  console.log(candy(ratings));
}
