/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  return new Set(
    nums1.filter(function (ele) {
      if (nums2.indexOf(ele) != -1) return true;
      else return false;
    })
  );
};
