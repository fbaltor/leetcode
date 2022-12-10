/**
 * @param {number} n
 * @return {number[]}
 */
// Get random integer between 0 and max - 1
var getRandomInt = (max) => {
  return Math.floor(max * Math.random());
};

// Flip random bit of a binary 'b' except the bit at position 'fixed',
// returning the new binary number and the position of the bit changed.
var flipRandomBit = (b, n, fixed = NaN) => {
  let random = getRandomInt(n);

  if (fixed) {
    while (random === fixed) {
      random = getRandomInt(n);
    }
  }

  let mask = 1 << random;

  return {
    element: b ^ mask,
    position: random,
  };
};

var grayCode = function(n) {
  // "Hashmap" to save numbers
  let map = {};
  let grayCode = [];

  let b = 0;
  let pos = 0;

  map[b] = pos;
  grayCode.push(b);

  for (let i = 0; i < 2 ** n; i++) {
    console.log(i);
    let fliped = flipRandomBit(b, n, pos);

    let lim = 10;
    let j = 0;
    while (fliped.element in map && j++ < lim) {
      console.log(fliped);
      fliped = flipRandomBit(b, n, pos);
    }

    b = fliped.element;
    pos = fliped.position;

    map[b] = pos;
    grayCode.push(b);
  }

  return grayCode;
};

console.log(grayCode(3));
