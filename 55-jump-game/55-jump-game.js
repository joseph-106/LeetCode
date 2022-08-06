/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
    let loc = 0;
    let max = nums[0];
    while (loc + max < nums.length - 1) {
        if (nums[loc] === 0 && max === 0) return false;
        if (max > 0) {
            loc++;
            max--;
        }
        max = Math.max(max, nums[loc]);
    }
    return true;
};