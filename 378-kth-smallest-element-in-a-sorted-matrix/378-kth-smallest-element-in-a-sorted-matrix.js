/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(matrix, k) {
    const tempArr = [];
    matrix.forEach(e => tempArr.push(...e));
    return tempArr.sort((a, b) => a - b)[k - 1];
};