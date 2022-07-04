/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function(nums) {
    const resultArr = new Array(2);
    for (let i = 1; i <= nums.length; i++) {
        if (!isNaN(resultArr[0]) && !isNaN(resultArr[1])) break;
        if (nums.filter(e => e === i).length === 2) resultArr[0] = i;
        if (!nums.includes(i)) resultArr[1] = i; 
    };
    return resultArr;
};