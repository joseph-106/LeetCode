/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
    const resultArr = [];
    const recursive = (sum, sumArr, temp) => {
        if (sum === target) resultArr.push(sumArr);
        if (sum < target) for (let i = temp; i < candidates.length; i++) if (sum + candidates[i] <= target) recursive(sum + candidates[i], [...sumArr, candidates[i]], i);
    };
    recursive(0, [], 0);
    return resultArr;
};