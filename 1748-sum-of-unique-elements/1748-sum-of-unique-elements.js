/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = function(nums) {
    const hashObj = {};
    nums.forEach(num => { hashObj[num] ? hashObj[num]++ : hashObj[num] = 1 });
    return Object.keys(hashObj).filter(key => hashObj[key] === 1).reduce((acc, cur) => acc + Number(cur), 0);
};