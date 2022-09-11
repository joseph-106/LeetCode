/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k) {
    const resultArr = [];
    const recursive = (loc, tempArr) => {
        if (tempArr.length === k) resultArr.push([...tempArr]);
        else for (let i = loc; i <= n; i++) {
            tempArr.push(i);
            recursive(i + 1, tempArr);
            tempArr.pop();
        }
    }
    recursive(1, []);
    return resultArr;
};