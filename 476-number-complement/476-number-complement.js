/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function(num) {
    return parseInt([...num.toString(2)].map((e) => e === "0" ? 1 : 0).join(""), 2);
};