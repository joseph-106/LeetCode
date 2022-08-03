/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const decodeMessage = function(key, message) {
    const tempSet = new Set();
    key.split("").forEach(e => tempSet.add(e));
    tempSet.delete(" ");
    const tempArr = Array.from(tempSet);
    message = message.split("").map(e => e = tempArr.indexOf(e)).map(e => String.fromCharCode(e + 97).replaceAll("`", " "));
    return message.join("");
};