/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function(nums) {
    const hashObj = {};
    const resultArr= [];
    for (const num of nums) hashObj[num] ? hashObj[num]++ : hashObj[num] = 1;
    for (const num in hashObj) if (hashObj[num] === 2) resultArr.push(num);
    return resultArr;
};