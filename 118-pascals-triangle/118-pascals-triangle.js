/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
    const pascalArr = [];
    for (let i = 0; i < numRows; i++){
        pascalArr[i] = [];
        for (let j = 0; j <= i; j++) pascalArr[i][j] = (j === 0 || j === i) ? 1 : pascalArr[i-1][j-1] + pascalArr[i-1][j];
    }
    return pascalArr;
};