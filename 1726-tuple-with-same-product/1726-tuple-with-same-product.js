/**
 * @param {number[]} nums
 * @return {number}
 */
const tupleSameProduct = function(nums) {
    let count = 0;
    const hashObj = {};
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const temp = nums[i] * nums[j];
            if (hashObj[temp]) {
                count += 8 * hashObj[temp];
                hashObj[temp]++;
            } else hashObj[temp] = 1;
        }
    }
    return count;
};