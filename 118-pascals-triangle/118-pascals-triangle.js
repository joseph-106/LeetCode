/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
    const resultArr = [];
    for (let i = 0; i < numRows; i++){
        const tempArr = [];
        for (let j = 0; j <= i; j++) tempArr.push(j === 0 || j === i ? 1 : resultArr[i-1][j-1] + resultArr[i-1][j]);
        resultArr.push(tempArr);
    }
    return resultArr;
};