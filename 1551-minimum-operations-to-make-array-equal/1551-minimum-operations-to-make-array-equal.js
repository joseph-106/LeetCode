/**
 * @param {number} n
 * @return {number}
 */
const minOperations = function(n) {
    let sum = 0;
    if (n % 2 === 0) for (let i = 1; i <= n/2; i++) sum += 2*i-1;
    else for (let i = 1; i <= (n-1)/2; i++) sum += 2*i;
    return sum;
};