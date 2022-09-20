/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = function(nums) {
    let sum = 0;
    const hashObj = {};
    nums.forEach(num => { hashObj[num] ? hashObj[num]++ : hashObj[num] = 1 });
    for (const num in hashObj) (hashObj[num] === 1) && (sum += Number(num));
    return sum;
};