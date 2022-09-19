/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = function(timeSeries, duration) {
    let total = 0;
    let temp = 0;
    for (let i = 0; i < timeSeries.length - 1; i++) {
        if (timeSeries[i] + duration < timeSeries[i + 1]) {
            temp += duration;
            total += temp;
            temp = 0;
        } else temp += timeSeries[i + 1] - timeSeries[i];
    }
    return total + temp + duration;
};