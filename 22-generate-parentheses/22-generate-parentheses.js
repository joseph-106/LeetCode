/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
    const resultArr = [];
    const recursive = (temp) => {
        if (temp.length < 2 * n) {
            recursive(temp + "(");
            if (temp.split("").filter(e => e === "(").length > temp.split("").filter(e => e === ")").length) recursive(temp + ")");
        } else if (temp.split("").filter(e => e === "(").length === temp.split("").filter(e => e === ")").length) resultArr.push(temp);
    }
    recursive("(");
    return resultArr;
};