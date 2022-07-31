/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const tempArr = [];
    for (const ch of s){
        if (ch === "(" || ch === "{" || ch === "[") tempArr.push(ch);
        if (ch === ")") if (tempArr.pop() !== "(") return false;
        if (ch === "}") if (tempArr.pop() !== "{") return false;
        if (ch === "]") if (tempArr.pop() !== "[") return false;
    }
    return tempArr.length === 0 ? true : false;
};