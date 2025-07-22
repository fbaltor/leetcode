/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function reverseArr(arr, start, end) {
  while (start < end) {
    var temp = arr[end];
    arr[end] = arr[start];
    arr[start] = temp;
    start++;
    end--;
  }
}

var rotate = function (nums, k) {
  k = k % nums.length;

  var step = k;

  reverseArr(nums, 0, nums.length - 1);
  reverseArr(nums, 0, step - 1);
  reverseArr(nums, step, nums.length - 1);
};
