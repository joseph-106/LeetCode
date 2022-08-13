/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function(num) {
    return parseInt(num.toString(2).split("").reduce((acc, cur) => { acc += cur === "0" ? "1" : "0"; return acc }, ""), 2);
};