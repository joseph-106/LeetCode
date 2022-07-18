/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
    const subsetArr = [];
    const recursive = (subset, temp) => {
        subsetArr.push(subset);
        for (let i = temp; i < nums.length; i++) recursive([...subset, nums[i]], i + 1);
    };
    recursive([], 0);
    return subsetArr;
};