/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function(cost) {
    let dy = Array.from({ length: cost.length }, () => 0);
    dy[0] = cost[0];
    dy[1] = cost[1];
    for (let i = 2; i < dy.length; i++) dy[i] = Math.min(dy[i-2] + cost[i], dy[i-1] + cost[i]);
    return Math.min(dy[dy.length - 2], dy[dy.length - 1]);
};