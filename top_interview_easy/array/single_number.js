/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((single, current) => {
    single ^= current;

    return single;
  }, 0);
};
