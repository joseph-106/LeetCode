/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
    const subsetArr = [];
    const recursive = (subset, temp) => {
        if (!subsetArr.includes(subset)) subsetArr.push(subset);
        if (temp < nums.length) {
            recursive([...subset, nums[temp]], temp + 1);
            recursive(subset, temp + 1);
        }
    };
    recursive([], 0);
    return subsetArr;
};