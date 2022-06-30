/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
    let result = "";
    let num = 1;
    let flag = true;
    const tempArr = [];
    if (numRows === 1) return s;
    for (let i = 0; i < s.length; i++){
        tempArr.push([s[i], num]);
        num += flag ? 1 : -1;
        if (num === numRows || num === 1) flag = !flag;
    }
    for (let i = 1; i <= numRows; i++) tempArr.forEach(e => {if (e[1] === i) result += e[0]});
    return result;
};
