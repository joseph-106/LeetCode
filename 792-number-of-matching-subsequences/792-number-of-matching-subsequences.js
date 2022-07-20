/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
const numMatchingSubseq = function(s, words) {
    let count = 0;
    words.forEach(word => {
        let index = -1
        let flag = true;
        for (const ch of word) {
            index = s.indexOf(ch, index + 1);
            if (index === -1) { 
                flag = false;
                break; 
            }
        }
        if (flag) count++;
    })
    return count;
};