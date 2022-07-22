/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = function(nums, index) {
    const resultArr = [];
    for (const num of nums) resultArr.splice(index.shift(), 0, num);
    return resultArr;
};