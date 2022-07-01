/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
    const letters = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ];
    const resultArr = [];
    const recursive = (temp, num) => {
        if (temp.length === digits.length) resultArr.push(temp);
        else {
            if (digits[num] === '7' || digits[num] === '9') for (let i = 0; i < 4; i++) recursive(temp + letters[digits[num]-2][i], num+1);
            else for (let i = 0; i < 3; i++) recursive(temp + letters[digits[num]-2][i], num+1);
        };
    };
    if (digits !== "") recursive("", 0);
    return resultArr;
};