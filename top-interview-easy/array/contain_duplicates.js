/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  if (nums.length == 0) return false;
  var obj = {};
  for (index in nums) {
    if (!obj[nums[index]]) obj[nums[index]] = 0;

    obj[nums[index]]++;

    if (obj[nums[index]] == 2) return true;

    if (index == nums.length - 1) return false;
  }
};
