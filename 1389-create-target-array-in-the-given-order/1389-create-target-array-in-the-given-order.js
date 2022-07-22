/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = function(nums, index) {
    const resultArr = [];
    nums.forEach((e, i) => resultArr.splice(index[i], 0, e));
    return resultArr;
};