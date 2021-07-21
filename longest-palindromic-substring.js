/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longest = '';
  for (let i = 0; i < s.length; i++) {
    let palindrome = expandPalindrome(i, s);
    if (palindrome.length > longest.length) longest = palindrome;
  }

  return longest;
};

var expandPalindrome = function(index, s) {
  let odd = expandOdd(index, s);
  let even = expandEven(index, s);

  if (odd.length > even.length) return odd;
  return even;
};

var expandOdd = function(index, s) {
  let palindrome = s[index];

  let j = index,
    k = j;
  while (s[--j] === s[++k] && -1 < j && k < s.length) {
    palindrome = s[j] + palindrome + s[k];
  }

  return palindrome;
};

var expandEven = function(index, s) {
  let palindrome = s[index];

  if (index === s.length - 1) return palindrome;

  let j = index,
    k = j + 1;
  if (s[j] !== s[k]) return palindrome;

  palindrome = s[j] + s[k];
  while (s[--j] === s[++k] && -1 < j && k < s.length) {
    palindrome = s[j] + palindrome + s[k];
  }

  return palindrome;
};

console.log(longestPalindrome('aaaa'));
