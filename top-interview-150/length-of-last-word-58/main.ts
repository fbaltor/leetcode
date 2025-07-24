import { toArrayBuffer } from "jsr:@std/streams";

function extractWordsAsArray(s: string): string[] {
  const wordsArray = new Array<string>();

  const isNonSpaceChar = (char: string): boolean => /\S/.test(char);

  for (let i = 0; i < s.length; i++) {
    let word = "";
    while (isNonSpaceChar(s[i]) && i < s.length) {
      word += s[i];
      i++;
    }
    if (word.length > 0) wordsArray.push(word);
  }

  return wordsArray;
}

function lengthOfLastWord(s: string): number {
  const wordsArray = extractWordsAsArray(s);
  const lastWord = wordsArray[wordsArray.length - 1];
  return lastWord.length;
}

const input = new TextDecoder().decode(
  await toArrayBuffer(Deno.stdin.readable),
);
const lines = input.trim().split("\n");

for (let i = 0; i < lines.length; i++) {
  const s = lines[i].slice(1, lines[i].length - 1);

  console.log(lengthOfLastWord(s));
}
