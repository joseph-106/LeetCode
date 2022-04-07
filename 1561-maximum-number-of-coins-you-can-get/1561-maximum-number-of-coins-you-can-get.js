/**
 * @param {number[]} piles
 * @return {number}
 */
const maxCoins = function(piles) {
    const count = piles.length;
    piles = count%2 === 0
        ? piles.sort((a,b) => a-b).filter((e,i) => i%2 !== 1)
        : piles.sort((a,b) => a-b).filter((e,i) => i%2 === 1);
    return piles.slice(-count/3).reduce((acc, cur) => acc + cur, 0);
};