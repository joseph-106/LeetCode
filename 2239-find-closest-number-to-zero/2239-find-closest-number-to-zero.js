/**
 * @param {number[]} nums
 * @return {number}
 */
const findClosestNumber = function(nums) {
    nums.sort((a, b) => Math.abs(a) - Math.abs(b));
    if (nums.includes(Math.abs(nums[0]))) return Math.abs(nums[0]);
    return nums[0];
};