/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
const slowestKey = function(releaseTimes, keysPressed) {
    let maxValue = releaseTimes[0];
    let maxPosition = 0;
    for (let i = 1; i < releaseTimes.length; i++){
        if (releaseTimes[i] - releaseTimes[i-1] > maxValue ||
            (releaseTimes[i] - releaseTimes[i-1] === maxValue && keysPressed[maxPosition].charCodeAt(0) < keysPressed[i].charCodeAt(0))) {
            maxValue = releaseTimes[i] - releaseTimes[i-1];
            maxPosition = i;
        }
    }
    return keysPressed[maxPosition];
};