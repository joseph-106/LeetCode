/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = function(numBottles, numExchange) {
    let count = numBottles;
    let empty = count;
    while (empty >= numExchange){
        const change = Math.floor(empty/numExchange);
        const remain = empty%numExchange;
        count += change;
        empty = change + remain;
    }
    return count;
};