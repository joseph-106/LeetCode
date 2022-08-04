/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    let res = false;
    const recursive = (num, numArr) => {
        let sum = 0;
        for (const digit of String(num)) sum += digit**2;
        if (sum === 1) {
            res = true;
            return;
        }
        if (numArr.includes(sum)) return;
        numArr.push(sum);
        recursive(sum, numArr);
    }
    recursive(n, [n]);
    return res;
};