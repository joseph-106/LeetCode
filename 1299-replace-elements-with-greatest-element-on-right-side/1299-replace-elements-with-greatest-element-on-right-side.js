/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function(arr) {
    const resultArr = [];
    let max = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        max = Math.max(max, arr[i + 1]);
        resultArr.unshift(max);
    }
    return [...resultArr, -1];
};