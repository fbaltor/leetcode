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

function reverseWords(s: string): string {
  const wordsArray = extractWordsAsArray(s);

  let reversedString = "";
  for (let i = wordsArray.length - 1; 0 <= i; i--) {
    reversedString += wordsArray[i];

    if (i !== 0) reversedString += " ";
  }

  return reversedString;
}

const input = new TextDecoder().decode(
  await toArrayBuffer(Deno.stdin.readable),
);
const lines = input.trim().split("\n");

for (let i = 0; i < lines.length; i++) {
  const s = lines[i].slice(1, lines[i].length - 1);

  console.log(reverseWords(s));
}
