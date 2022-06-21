/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
    for(let i = 0; i < n; i++){
        for (let j = 0; j < nums1.length; j++){
            if (nums1[j] === 0) {
                nums1[j] = nums2.pop();
                break;
            }           
        }
    }
    nums1.sort((a, b) => a - b);
};