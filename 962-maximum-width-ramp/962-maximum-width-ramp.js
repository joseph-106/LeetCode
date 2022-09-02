/**
 * @param {number[]} nums
 * @return {number}
 */
const maxWidthRamp = function(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length - 1; j > i; j--) {
            if (j - i <= max) break;
            if (nums[i] <= nums[j]) max = Math.max(max, j - i);
        }
    }
    return max;
};