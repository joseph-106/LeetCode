/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
const sortJumbled = function(mapping, nums) {
    const tempArr = [];
    nums.forEach(num => {
        let temp = "";
        for (const digit of String(num)) temp += mapping[digit];
        tempArr.push([num, Number(temp)]);
    })
    return tempArr.sort((a, b) => a[1] - b[1]).map(temp => temp = temp[0]);
};