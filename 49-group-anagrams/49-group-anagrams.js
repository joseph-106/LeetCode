/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const hashObj = {};
    strs.forEach(e => {
        const sorted = e.split("").sort().join("");
        if (hashObj[sorted]) hashObj[sorted].push(e);
        else hashObj[sorted] = [e];
    })
    return Object.values(hashObj);
};
