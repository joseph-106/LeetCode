/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
    const resultArr = [];
    for (let i = 0; i <= n; i++) resultArr.push(i.toString(2).replaceAll(0, "").length);
    return resultArr;
};