/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
const mergeSimilarItems = function(items1, items2) {
    const hashObj = {};
    items1.forEach(item => hashObj[item[0]] = item[1]);
    items2.forEach(item => hashObj[item[0]] ? hashObj[item[0]] += item[1] : hashObj[item[0]] = item[1]);
    return Object.entries(hashObj).sort((a, b) => a[0] - b[0]);
};