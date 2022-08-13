/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
    if (numRows === 1) return s;
    const tempArr = new Array(numRows).fill("");
    let loc = 0;
    let flag = true;
    for (let i = 0; i < s.length; i++) {
        tempArr[loc] += s[i];
        flag ? loc++ : loc--;
        if (loc === numRows - 1) flag = false;
        else if (loc === 0) flag = true;
    }
    return tempArr.join("");
};
