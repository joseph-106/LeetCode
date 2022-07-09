/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    const tempArr = [];
    let uniqueArr = [];
    for (let i = 0; i < s.length; i++){
        if (!tempArr.includes(s[i])) {
            tempArr.push(s[i]);
            uniqueArr.push([i, s[i]]);
        } else uniqueArr = uniqueArr.filter(e => e[1] !== s[i]);
    };
    return uniqueArr.length ? uniqueArr[0][0] : -1;
};