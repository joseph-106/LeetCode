/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
    const letters = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    const resultArr = [];
    const recursive = (temp, loc) => {
        if (temp.length === digits.length) resultArr.push(temp);
        else for (const letter of letters[digits[loc]]) recursive(temp + letter, loc + 1);
    };
    if (digits !== "") recursive("", 0);
    return resultArr;
};