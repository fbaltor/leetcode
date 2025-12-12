import * as readline from "node:readline/promises";
import { stdin as input } from "node:process";

const rl = readline.createInterface({ input, terminal: false });

const lines = rl[Symbol.asyncIterator]();

while (true) {
  const wordsLine = await lines.next();
  if (wordsLine.done) break;

  const maxWidthLine = await lines.next();
  if (maxWidthLine.done) break;

  const words = JSON.parse(wordsLine.value);
  // console.log(words);
  const maxWidth = JSON.parse(maxWidthLine.value);
  // console.log(maxWidth);

  const justified = fullJustify(words, maxWidth);
  console.log(justified);
}

function makeLine(
  lineWords: string[],
  maxWidth: number,
): string {
  const totalChars = lineWords.reduce(
    (sum, word) => sum + word.length,
    0,
  );
  const totalSpaces = maxWidth - totalChars;
  const gaps = lineWords.length - 1;

  const finalSpace = totalSpaces % gaps;
  const regularSpace = (totalSpaces - finalSpace) / (gaps - 1);

  return lineWords.reduce(
    (line, word, index) => {
      line += word;
      if (index < lineWords.length - 1) {
        line += " ".repeat(regularSpace);
      }

      return line;
    },
    "",
  );
}

// console.log(makeLine(["abc", "d", "cc"], 9));

function fullJustify(words: string[], maxWidth: number): string[] {
  console.log(words);
  let i = 0;

  let justified = new Array<string>(0);

  while (i < words.length) {
    let j = i;
    let lineWords = new Array<string>(0);
    let minWidth = 0;

    console.log(lineWords);
    while (minWidth <= maxWidth && j < words.length) {
      if (lineWords.length === 0) {
        minWidth += words[j].length;
      } else {
        minWidth += words[j].length + 1;
      }

      if (minWidth <= maxWidth) {
        lineWords.push(words[j]);
        j++;
      }
    }

    justified.push(makeLine(lineWords, maxWidth));
    i = j;
  }

  return justified;
}
