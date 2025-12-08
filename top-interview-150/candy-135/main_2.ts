import * as readline from "node:readline/promises";
import { stdin as input } from "node:process";

function candy(ratings: number[]): number {
  const candies: number[] = Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i - 1] < ratings[i]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 2; 0 <= i; i--) {
    if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
      candies[i] = candies[i + 1] + 1;
    }
  }

  return candies.reduce((sum, cur) => sum + cur);
}

const rl = readline.createInterface({ input, terminal: false });

for await (const line of rl) {
  const ratings = JSON.parse(line);

  const minNumOfCandies = candy(ratings);

  console.log(minNumOfCandies);
}
