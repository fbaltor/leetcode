/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var total = 0;
  var repeat = 0;

  for (var index in nums) {
    if (index > 0) {
      if (nums[index - 1] == nums[index]) {
        repeat++;
        if (index == nums.length - 1) {
          total += repeat;
          nums[index - total] = nums[index];
        }
      } else {
        total += repeat;
        nums[index - total] = nums[index];
        repeat = 0;
      }
    }
  }

  var len = nums.length - total;
  nums.slice(0, len);

  return len;
};
