/**
 * @param {number[]} nums
 * @return {number[]}
 */
let runningSum = function (nums) {
  for (i = 0; i < nums.length - 1; i++) {
    nums[i + 1] = nums[i + 1] + nums[i];
  }
  return nums;
};
