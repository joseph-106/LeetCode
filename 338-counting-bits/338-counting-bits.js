/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
    const resultArr = [];
    for (let i = 0; i <= n; i++) resultArr.push(i.toString(2).replace(/0/g, '').length);
    return resultArr;
};