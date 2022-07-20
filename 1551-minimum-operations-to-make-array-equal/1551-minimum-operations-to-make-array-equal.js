/**
 * @param {number} n
 * @return {number}
 */
const minOperations = function(n) {
    let sum = 0;
    for (let i = 1; i < n; i+=2) sum += n - i;
    return sum;
};