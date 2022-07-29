/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
    const tempObj = {};
    for (const ch of s) tempObj[ch] ? tempObj[ch]++ : tempObj[ch] = 1;
    const tempArr = Object.values(tempObj);
    let longest = 0;
    let flag = true;
    tempArr.forEach(e => {
        if (e % 2 === 0) {
            longest += e;
        } else {
            longest += e - 1;
            flag = false;
        }
    })
    return flag ? longest : longest + 1;
};