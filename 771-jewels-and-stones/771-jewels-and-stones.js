/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for (const stone of stones) if (jewels.includes(stone)) count++;
    return count;
};