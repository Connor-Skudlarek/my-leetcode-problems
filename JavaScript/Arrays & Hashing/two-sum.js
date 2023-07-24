/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      correctIndexValue1 = map.get(nums[i]);
      correctIndexValue2 = i;
      return [correctIndexValue1, correctIndexValue2];
    } else {
      mapKey = target - nums[i];
      map.set(mapKey, i);
    }
  }
};
