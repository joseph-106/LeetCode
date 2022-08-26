/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function(n) {
    if (n === 0) return false;
    while (n % 1 === 0 && n !== 1) n /= 2;
    return n === 1 ? true : false;
};