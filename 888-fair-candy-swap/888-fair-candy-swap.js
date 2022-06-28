/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
const fairCandySwap = function(aliceSizes, bobSizes) {
    const aliceSum = aliceSizes.reduce((acc, cur) => acc + cur, 0);
    const bobSum = bobSizes.reduce((acc, cur) => acc + cur, 0);
    for (let i = 0; i < aliceSizes.length; i++){
        for (let j = 0; j < bobSizes.length; j++){
            if (aliceSum - aliceSizes[i] + bobSizes[j] === bobSum - bobSizes[j] + aliceSizes[i]) return [aliceSizes[i], bobSizes[j]];
        }
    }
};