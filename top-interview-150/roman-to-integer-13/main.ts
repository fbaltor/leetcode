import * as readline from "node:readline/promises";
import { stdin as input } from "node:process";

const rl = readline.createInterface({ input, terminal: false });

for await (const line of rl) {
  const s = line.trim();
  const integer = romanToInt(s);
  console.log(integer);
}

function romanToInt(s: string): number {
  const romanTable: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let value = 0;
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1) {
      if (romanTable[s[i]] < romanTable[s[i + 1]]) {
        value += romanTable[s[i + 1]] - romanTable[s[i]];
        i++;
      } else {
        value += romanTable[s[i]];
      }
    } else {
      value += romanTable[s[i]];
    }
  }

  return value;
}
