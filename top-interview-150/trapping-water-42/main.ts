import { toArrayBuffer } from "jsr:@std/streams";

function trap(height: number[]): number {
}

const input = new TextDecoder().decode(
  await toArrayBuffer(Deno.stdin.readable),
);
const lines = input.trim().split("\n");

for (let i = 0; i < lines.length; i++) {
  const height = JSON.parse(lines[i]);

  console.log(trap(height));
}
