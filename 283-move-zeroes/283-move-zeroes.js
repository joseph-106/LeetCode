/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    let loc = 0;
    for (let i in nums) {
        if (nums[i] !== 0) {
            [nums[i], nums[loc]] = [nums[loc], nums[i]];
            loc++;
        } 
    }
};