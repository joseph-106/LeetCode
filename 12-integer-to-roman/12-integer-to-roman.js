/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
    let res = "";
    const hashObj = {1000: "M", 900: "CM", 500: "D", 400: "CD", 100: "C", 90: "XC", 50: "L", 40: "XL", 10: "X", 9: "IX", 5: "V", 4: "IV", 1: "I"};
    Object.keys(hashObj).reverse().forEach(e => {
        while (num >= e) {
            num -= e;
            res += hashObj[e];
        }
    })
    return res;
}; 