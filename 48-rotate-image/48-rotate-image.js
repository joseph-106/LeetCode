/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
    const n = matrix.length;
    const tempMatrix = new Array(n).fill(null).map(() => new Array(n).fill(true));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (tempMatrix[i][j]) {
                const temp = matrix[i][j];
                matrix[i][j] = matrix[j][n-1-i];
                matrix[j][n-1-i] = temp;
                tempMatrix[j][n-1-i] = false;
            }
        }
    }
};