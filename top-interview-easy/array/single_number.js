/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function (nums) {
  return nums.reduce((single, current) => {
    single ^= current;

    return single;
  }, 0);
};
