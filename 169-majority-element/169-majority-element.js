/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    let count = 1;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length ; i++){
        if (count > nums.length/2) return nums[i];
        count = (nums[i] === nums[i+1]) ? count + 1 : 1;
    }
};