/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function(arr) {
    const resultArr = [];
    for (let i = 0; i < arr.length - 1; i++) resultArr.push(Math.max(...arr.slice(i+1)));
    return [...resultArr, -1];
};