/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function(n) {
    while (n % 1 === 0 && n > 1) n /= 4;
    return n === 1 ? true : false;
};