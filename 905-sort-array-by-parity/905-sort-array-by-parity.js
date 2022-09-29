/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = function(nums) {
    const resArr = [];
    while (nums.length) {
        const num = nums.pop();
        num % 2 ? resArr.push(num) : resArr.unshift(num);
    }
    return resArr;
};