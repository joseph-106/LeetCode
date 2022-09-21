/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumEvenAfterQueries = function(nums, queries) {
    const sumArr = [];
    queries.forEach(query => {
        nums[query[1]] += query[0];
        sumArr.push(nums.reduce((acc, cur) => { return cur % 2 === 0 ? acc + cur : acc }, 0));
    })
    return sumArr;
};