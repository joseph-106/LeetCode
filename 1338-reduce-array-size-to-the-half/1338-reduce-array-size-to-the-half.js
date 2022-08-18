/**
 * @param {number[]} arr
 * @return {number}
 */
const minSetSize = function(arr) {
    const sizeObj = {};
    let sum = 0;
    let count = 0;
    arr.forEach(num => {
        if (sizeObj[num]) sizeObj[num]++;
        else sizeObj[num] = 1;
    })
    const sizeArr = Object.values(sizeObj).sort((a, b) => a - b);
    while (sum < arr.length / 2) {
        sum += sizeArr.pop();
        count++;
    }
    return count;
};