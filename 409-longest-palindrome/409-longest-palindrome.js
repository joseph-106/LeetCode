/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
    let longest = 0;
    const tempSet = new Set();
    for (const ch of s) {
        if (tempSet.has(ch)) {
            longest += 2;
            tempSet.delete(ch);
        } else {
            tempSet.add(ch);
        }
    }
    return tempSet.size > 0 ? longest + 1 : longest;
};