/**
 * @param {number[]} nums
 * @return {number}
 */

const arrayNesting = function(nums) {
    let longest = 1;
    const set = new Set();
    const recursive = (k, len) => {
        set.add(k);
        if (set.has(nums[k])) longest = Math.max(len, longest);
        else recursive(nums[k], len + 1);
    }
    nums.forEach(num => recursive(num, 1));
    return longest;
};