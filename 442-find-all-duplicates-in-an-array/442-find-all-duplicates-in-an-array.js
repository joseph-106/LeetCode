/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function(nums) {
    const hashObj = {};
    for (const num of nums) hashObj[num] = hashObj[num] ? hashObj[num] + 1 : 1;
    return Object.entries(hashObj).filter(e => e[1] === 2).map(e => e[0]); 
};