/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let prefix = "";
    const shortest = strs.sort((a, b) => a.length - b.length).shift();
    const len = strs.length;
    for (let i = 0; i < shortest.length; i++) {
        if (strs.filter(str => str[i] === shortest[i]).length === len) prefix += shortest[i];
        else break;
    }
    return prefix;
};