/**
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = function(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] > arr[i + 1]) return i;
        if (arr[len - 1 - i] > arr[len - 2 - i]) return len - 1 - i;
    } 
};