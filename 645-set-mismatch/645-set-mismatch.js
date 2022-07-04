/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function(nums) {
    let resultArr = new Array(2);
    for (let i = 1; i <= nums.length; i++) {
        if (resultArr.filter(Boolean).length === 2) break;
        if (nums.filter(e => e === i).length === 2) resultArr[0] = i;
        if (!nums.includes(i)) resultArr[1] = i;
    }  
    return resultArr;
};