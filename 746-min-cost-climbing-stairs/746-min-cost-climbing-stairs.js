/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function(cost) {
    for (let i = 2; i < cost.length; i++) cost[i] = Math.min(cost[i-2] + cost[i], cost[i-1] + cost[i]);
    return Math.min(cost.pop(), cost.pop());
};