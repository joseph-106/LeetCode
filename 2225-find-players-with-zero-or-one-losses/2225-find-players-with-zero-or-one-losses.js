/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
const findWinners = function(matches) {
    const resultArr = [[], []];
    const tempObj = {};
    matches.forEach(match => {
        if (!tempObj[match[0]]) tempObj[match[0]] = 0;
        tempObj[match[1]] ? tempObj[match[1]]++ : tempObj[match[1]] = 1;
    })
    for (const key in tempObj) {
        if (tempObj[key] === 0) resultArr[0].push(key);
        if (tempObj[key] === 1) resultArr[1].push(key);
    }
    return resultArr;
};