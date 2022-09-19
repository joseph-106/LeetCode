/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = function(timeSeries, duration) {
    let res = 0;
    for (let i = 1; i < timeSeries.length; i++) res += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
    return res + duration;
};