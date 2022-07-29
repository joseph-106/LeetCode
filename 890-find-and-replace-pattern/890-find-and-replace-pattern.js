/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const findAndReplacePattern = function(words, pattern) {
    const resultArr = [];
    words.forEach(word => {
        const hashObj = new Object();
        const tempArr = word.split("");
        for (let i = 0; i < pattern.length; i++) {
            if (!hashObj[pattern[i]] && !Object.values(hashObj).includes(word[i])) hashObj[pattern[i]] = word[i];
            if (tempArr[i] === hashObj[pattern[i]]) tempArr[i] = pattern[i];  
        }
        if (tempArr.join("") === pattern) resultArr.push(word);
    })
    return resultArr;
};