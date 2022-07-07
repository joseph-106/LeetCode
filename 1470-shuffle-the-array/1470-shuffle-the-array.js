/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
    const shuffledArr = [];
    for (let i = 0; i < n; i++) {
        let temp = i;
        while (temp < nums.length) {
            shuffledArr.push(nums[temp]);
            temp += n;
        };
    };
    return shuffledArr;
};