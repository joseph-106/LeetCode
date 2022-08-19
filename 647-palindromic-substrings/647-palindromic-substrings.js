/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function(s) {
    let count = s.length;
    const isPalindrome = (x) => {
        for (let i = 0; i < x.length/2; i++) if (x[i] !== x[x.length-1-i]) return false
        return true;
    }
    const recursive = (loc, temp) => {
        if (temp.length >= 2 && isPalindrome(temp)) count++;
        if (loc < s.length) recursive(loc + 1, temp += s[loc]);
    }
    for (let i = 0; i < s.length - 1; i++) recursive(i, "");
    return count;
};