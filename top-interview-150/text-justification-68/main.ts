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
  isLastLine: boolean = false,
): string {
  // Last line or single word: left-justify
  if (isLastLine || lineWords.length === 1) {
    const line = lineWords.join(" ");
    return line + " ".repeat(maxWidth - line.length);
  }

  const totalChars = lineWords.reduce((sum, word) => sum + word.length, 0);
  const totalSpaces = maxWidth - totalChars;
  const gaps = lineWords.length - 1;

  const spacesPerGap = Math.floor(totalSpaces / gaps);
  const extraSpaces = totalSpaces % gaps;

  return lineWords.reduce((line, word, index) => {
    line += word;
    if (index < lineWords.length - 1) {
      // Add regular spaces to all gaps
      line += " ".repeat(spacesPerGap);
      // Add one extra space to the first 'extraSpaces' gaps
      if (index < extraSpaces) {
        line += " ";
      }
    }
    return line;
  }, "");
}

function fullJustify(words: string[], maxWidth: number): string[] {
  let i = 0;
  let justified = new Array<string>(0);

  while (i < words.length) {
    let j = i;
    let lineWords = new Array<string>(0);
    let minWidth = 0;

    while (j < words.length) {
      const wordLen = words[j].length;
      const neededWidth = lineWords.length === 0
        ? wordLen
        : minWidth + 1 + wordLen;

      if (neededWidth <= maxWidth) {
        lineWords.push(words[j]);
        minWidth = neededWidth;
        j++;
      } else {
        break;
      }
    }

    const isLastLine = j === words.length;
    justified.push(makeLine(lineWords, maxWidth, isLastLine));
    i = j;
  }

  return justified;
}
