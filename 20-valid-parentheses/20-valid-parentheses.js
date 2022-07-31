/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const tempArr = [];
    for (const ch of s){
        switch(ch) {
            case "(":
            case "{":
            case "[":
                tempArr.push(ch);
                break;
            case ")":
                if (tempArr.pop() !== "(") return false;
                break;
            case "}":
                if (tempArr.pop() !== "{") return false;
                break;
            case "]":
                if (tempArr.pop() !== "[") return false;
                break;
        }
    }
    return tempArr.length === 0 ? true : false;
};