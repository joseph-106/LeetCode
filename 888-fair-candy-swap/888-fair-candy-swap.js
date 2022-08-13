/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
const fairCandySwap = function(aliceSizes, bobSizes) {
    const sumA = aliceSizes.reduce((acc, cur) => acc + cur, 0);
    const sumB = bobSizes.reduce((acc, cur) => acc + cur, 0);
    for (let i = 0; i < aliceSizes.length; i ++) {
        for (let j = 0; j < bobSizes.length; j++) {
            if (sumA + (bobSizes[j] * 2) === sumB + (aliceSizes[i] * 2)) return [aliceSizes[i], bobSizes[j]];
        }
    }
};