/**
 * @param {number[]} nums
 * @return {number[]}
 */
const numberOfPairs = function(nums) {
    let [pair, left] = [0, 0];
    const hashObj = {};
    nums.forEach(num => {
        hashObj[num] ? hashObj[num]++ : hashObj[num] = 1;
    })
    Object.values(hashObj).forEach(count => {
        pair += Math.floor(count / 2);
        left += count % 2;
    })
    return [pair, left];
};