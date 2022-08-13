/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function(nums) {
    const tempSet = new Set();
    let repetition;
    let sum = 0;
    for (const num of nums) {
        if (tempSet.has(num)) repetition = num;
        else {
            tempSet.add(num);
            sum += num;
        }
    }
    return [repetition, (1 + nums.length) * nums.length / 2 - sum];
};