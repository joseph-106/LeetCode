/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    const tempSet = new Set();
    nums.forEach(num => tempSet.has(num) ? tempSet.delete(num) : tempSet.add(num));
    return [...tempSet].pop();
};