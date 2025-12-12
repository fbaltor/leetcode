import * as readline from "node:readline/promises";
import { stdin as input } from "node:process";

const rl = readline.createInterface({ input, terminal: false });

for await (const line of rl) {
  const num = Number(line.trim());
  const roman = intToRoman(num);
  console.log(roman);
}

function intToRoman(num: number): string {
  return "a";
}
