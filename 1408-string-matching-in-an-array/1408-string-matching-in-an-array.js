/**
 * @param {string[]} words
 * @return {string[]}
 */
const stringMatching = function(words) {
    const resultArr = [];
    words.sort((a, b) => a.length - b.length);
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].includes(words[i])) {
                resultArr.push(words[i]);
                break;
            }
        }
    }
    return resultArr;
};