/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
    const letters = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    const resultArr = [];
    const recursive = (temp, loc) => {
        if (temp.length === digits.length) resultArr.push(temp);
        else letters[digits[loc]].forEach(letter => {
            recursive(temp + letter, loc + 1);
        })
    };
    if (digits !== "") recursive("", 0);
    return resultArr;
};