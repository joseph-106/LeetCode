/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function(arr) {
    while (arr.length) {
        const temp = arr.pop();
        if (arr.includes(temp / 2) || arr.includes(temp * 2)) return true;
    }
    return false;
};