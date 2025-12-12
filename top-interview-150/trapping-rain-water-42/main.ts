import * as readline from "node:readline/promises";
import { stdin as input } from "node:process";

const rl = readline.createInterface({ input, terminal: false });

for await (const line of rl) {
  const height = JSON.parse(line);

  const volume = trap(height);

  console.log(volume);
}

function trap(height: number[]): number {
  const volumeLeftToRight = new Array(height.length).fill(0);
  let biggestSoFar = 0;
  for (let i = 0; i < height.length; i++) {
    if (height[i] >= biggestSoFar) biggestSoFar = height[i];
    else {
      volumeLeftToRight[i] = biggestSoFar - height[i];
    }
  }

  const volumeRightToLeft = new Array(height.length).fill(0);
  biggestSoFar = 0;
  for (let j = height.length - 1; 0 <= j; j--) {
    if (height[j] >= biggestSoFar) biggestSoFar = height[j];
    else {
      volumeRightToLeft[j] = biggestSoFar - height[j];
    }
  }

  let volume = 0;
  for (let i = 0; i < height.length; i++) {
    volume += Math.min(volumeLeftToRight[i], volumeRightToLeft[i]);
  }

  return volume;
}
