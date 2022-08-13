/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function(nums) {
    let repetition;
    let loss;
    nums.sort((a, b) => a - b);
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] === nums[i]) repetition = nums[i - 1];
        if (!nums.includes(i)) loss = i;        
        if (repetition && loss) break;
    }
    return [repetition, loss];
};