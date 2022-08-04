/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function(arr) {
    const tempSet = new Set();
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i];
        if (tempSet.has(temp)) return true;
        tempSet.add(temp / 2);
        tempSet.add(temp * 2);
    }
    return false;
};