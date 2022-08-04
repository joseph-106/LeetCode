/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    let res = false;
    const recursive = (num, numArr) => {
        const sum = num.toString().split("").reduce((acc, cur) => acc += cur**2, 0);
        if (sum === 1) {
            res = true;
            return;
        }
        if (numArr.includes(sum)) return;
        numArr.push(sum);
        recursive(sum, numArr);
    }
    recursive(n, []);
    return res;
};