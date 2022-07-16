/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function(s, indices) {
    const tempArr = new Array(indices.length);
    for (let i = 0; i < indices.length; i++) tempArr[indices[i]] = s[i];
    return tempArr.join("");
};