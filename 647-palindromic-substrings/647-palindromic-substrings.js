/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function(s) {
    let count = 0;
    const findAll = (left, right) => {
        while(left >= 0 && right <= s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        findAll(i, i);
        findAll(i, i + 1);
    }
    return count;
};