/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSumDivThree = function(nums) {
    const tempArr = new Array(3).fill(0);
    for (const num of nums) {
        for (const temp of [...tempArr]) {
            const sum = num + temp;
            tempArr[sum % 3] = Math.max(sum, tempArr[sum % 3]);
        }
    }
    return tempArr[0];
};