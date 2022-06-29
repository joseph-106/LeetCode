/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    const resultArr = [];
    const recursive = (tempArr) => {
        if (tempArr.length < nums.length) {
            for (let i = 0; i < nums.length; i++) if (!tempArr.includes(nums[i])) recursive([...tempArr, nums[i]]);
        } else resultArr.push(tempArr);
    };
    recursive([]);
    return resultArr;
};