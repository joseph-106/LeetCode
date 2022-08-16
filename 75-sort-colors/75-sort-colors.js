/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
    const swap = (a, b) => [nums[a], nums[b]] = [nums[b], nums[a]];
    let left = 0;
    let right = nums.length - 1;
    let loc = 0;
    while(loc <= right) {
        const val = nums[loc];
        if (val === 0) {
            swap(loc, left);
            left++;
            loc++;
        } else if (val === 2) {
            swap(loc, right);
            right--;
        } else loc++;
    }
};