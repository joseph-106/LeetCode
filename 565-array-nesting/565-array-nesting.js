/**
 * @param {number[]} nums
 * @return {number}
 */

const arrayNesting = function(nums) {
    let longest = 0;
    const set = new Set();
    const recursive = (k, len) => {
        if (set.has(nums[k])) longest = Math.max(len, longest);
        else {
            set.add(nums[k]);
            recursive(nums[k], len + 1);
        }
    }
    nums.forEach(num => recursive(num, 0));
    return longest;
};