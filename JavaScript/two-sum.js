/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    let check = 0;
    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            check = nums[i] + nums[j]
            if (check == target){
                let index1 = i;
                let index2 = j;
                return [index1, index2]
            }
        }
    }
};