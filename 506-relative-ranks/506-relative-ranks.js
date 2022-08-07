/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = function(score) {
    const tempArr = [];
    const resultArr = [];
    score.forEach((e, i) => tempArr.push([e, i]));
    tempArr.sort((a, b) => b[0] - a[0]).forEach((e, i) => e[0] = i + 1);
    tempArr.sort((a, b) => a[1] - b[1]).forEach(e => {
        switch(e[0]) {
            case 1:
                resultArr.push("Gold Medal");
                break;
            case 2:
                resultArr.push("Silver Medal");
                break;
            case 3:
                resultArr.push("Bronze Medal");
                break;
            default: 
                resultArr.push(e[0].toString());
                break;
        }
    });
    return resultArr;
};