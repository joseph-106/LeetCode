/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    let count = 1;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length ; i++) {
        (nums[i] === nums[i+1]) ? count++ : count = 1;
        if (count > nums.length/2) return nums[i];
    }
};