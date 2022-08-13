/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
    const resultArr = [];
    const recursive = (num, count, temp) => {
        if (num === 0 && count === 0) resultArr.push(temp);
        if (num > 0) recursive(num - 1, count + 1, temp + "(");
        if (count > 0) recursive(num, count - 1, temp + ")");
    }
    recursive(n, 0, "");
    return resultArr;
};