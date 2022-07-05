/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
    let max = 1, temp = 1;
    nums = [...new Set(nums)].sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i++){
        if (nums[i] + 1 === nums[i+1]) temp++;
        else {
            max = Math.max(max, temp);
            temp = 1;
        }
    }
    return nums.length === 0 ? 0 : max;
};