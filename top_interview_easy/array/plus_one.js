/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function(digits) {

  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += carry;
    carry = Math.floor(digits[i]/10);
    digits[i] = digits[i]%10;
    
    if(carry == 1 && i == 0) digits.unshift(1);
  }

  return digits;
};
