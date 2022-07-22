/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = function(nums, index) {
    const resultArr = [];
    for (let i = 0; i< nums.length; i++) resultArr.splice(index[i], 0, nums[i]);
    return resultArr;
};