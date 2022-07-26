/**
 * @param {string} s
 * @return {number}
 */
const numSplits = function(s) {
    let count = 0;
    const set1 = new Set(), set2 = new Set(), tempArr = [];    
    for (let i = 0; i < s.length - 1; i++) tempArr[i] = set1.add(s[i]).size;
    for (let i = 0; i < s.length - 1; i++) 
        if (tempArr[s.length - i - 2] === set2.add(s[s.length - i - 1]).size) count++;
    return count;
};