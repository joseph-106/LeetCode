/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
    const tempArr = [1, 2];
    for (let i = 2; i < n; i++) i % 2 === 0 
        ? tempArr[0] = tempArr[0] + tempArr[1] 
        : tempArr[1] = tempArr[0] + tempArr[1];
    return n % 2 === 0 ? tempArr[1] : tempArr[0];
};