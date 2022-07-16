/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) {
    let count = 0;
    [...heights].sort((a, b) => a - b).forEach((e, i) => {
        if (e !== heights[i]) count++;
    });
    return count;
};