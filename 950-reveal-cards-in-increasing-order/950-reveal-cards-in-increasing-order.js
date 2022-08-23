/**
 * @param {number[]} deck
 * @return {number[]}
 */
const deckRevealedIncreasing = function(deck) {
    const resultArr = [];
    deck.sort((a, b) => a - b);
    while (deck.length) {
        if (resultArr.length >= 2) resultArr.unshift(resultArr.pop());
        resultArr.unshift(deck.pop());
    }
    return resultArr;
};