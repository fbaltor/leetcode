import { toArrayBuffer } from "jsr:@std/streams";

function canCompleteCircuit(gas: number[], cost: number[]): number {
  const totalGas = gas.reduce((acc, ele) => ele + acc, 0);
  const totalCost = cost.reduce((acc, ele) => ele + acc, 0);

  if (totalGas < totalCost) return -1;

  let leastGas = Infinity;
  let leastGasPos = 0;
  let gasLowerLevel = 0;
  for (let i = 0; i <= gas.length; i++) {
    if (i === 0) {
      gasLowerLevel += gas[i];
    } else {
      gasLowerLevel -= cost[i - 1];
      if (gasLowerLevel < leastGas) {
        leastGas = gasLowerLevel;
        leastGasPos = i % gas.length;
      }

      gasLowerLevel += gas[i];
    }
  }

  return leastGasPos;
}

const input = new TextDecoder().decode(
  await toArrayBuffer(Deno.stdin.readable),
);
const lines = input.trim().split("\n");

for (let i = 0; i < lines.length; i += 2) {
  if (i + 1 < lines.length) {
    const gas = JSON.parse(lines[i]);
    const cost = JSON.parse(lines[i + 1]);

    const canComplete = canCompleteCircuit(gas, cost);

    console.log(canComplete);
  }
}
