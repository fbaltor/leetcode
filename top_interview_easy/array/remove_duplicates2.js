/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  nums.forEach((element, index) => {
    while (element == nums[index + 1]) {
      nums.splice(index + 1, 1);
    }
  });

  return nums.lenght;
};
