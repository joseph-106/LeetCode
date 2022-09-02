/**
 * @param {number[]} nums
 * @return {number}
 */
const maxWidthRamp = function(nums) {
    let max = 0;
    const stack = [];
    for (let i = 0; i < nums.length; i++) if (!stack.length || nums[i] <= nums[stack[stack.length - 1]]) stack.push(i);
    for (let i = nums.length - 1; i >= 0; i--) while (stack.length && nums[i] >= nums[stack[stack.length - 1]]) max = Math.max(i - stack.pop(), max);
    return max;
};