/**
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) return i;
        if (arr[arr.length - 1 - i] > arr[arr.length - 2 - i]) return arr.length - 1 - i;
    } 
};