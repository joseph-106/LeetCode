/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
    const resultArr = [];
    for (let i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 !== 0) resultArr.push("Fizz");
        else if (i % 3 !== 0 && i % 5 === 0) resultArr.push("Buzz");
        else if (i % 3 === 0 && i % 5 === 0) resultArr.push("FizzBuzz");
        else resultArr.push(String(i));
    }
    return resultArr;
};