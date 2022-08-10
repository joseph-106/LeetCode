/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
    let res = "";
    if (num >= 1000) {
        const temp = Math.floor(num / 1000);
        num -= temp * 1000;
        res += "M".repeat(temp);
    }
    if (num >= 500) {
        if (num >= 900) {
            num -= 900;
            res += "CM"
        } else {
            num -= 500;
            res += "D";
        }
    }
    if (num >= 100) {
        const temp = Math.floor(num / 100);
        num -= temp * 100;
        if (temp === 4) res += "CD";
        else res += "C".repeat(temp);
    }
    if (num >= 50) {
        if (num >= 90) {
            num -= 90;
            res += "XC"
        } else {
            num -= 50;
            res += "L";
        }
    }
    if (num >= 10) {
        const temp = Math.floor(num / 10);
        num -= temp * 10;
        if (temp === 4) res += "XL";
        else res += "X".repeat(temp);
    }
    if (num >= 5) {
        if (num >= 9) {
            num -= 9;
            res += "IX"
        } else {
            num -= 5;
            res += "V";
        }
    }
    if (num >= 1) {
        const temp = num / 1;
        num -= temp * 1;
        if (temp === 4) res += "IV";
        else res += "I".repeat(temp);
    }
    return res;
};