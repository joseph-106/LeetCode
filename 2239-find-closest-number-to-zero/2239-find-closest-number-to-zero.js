/**
 * @param {number[]} nums
 * @return {number}
 */
const findClosestNumber = function(nums) {
    nums.sort((a, b) => Math.abs(a) - Math.abs(b));
    return nums.includes(Math.abs(nums[0])) ? Math.abs(nums[0]) : nums[0];
};