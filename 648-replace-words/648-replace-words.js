/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
const replaceWords = function(dictionary, sentence) {
    let result = "";
    for (x of sentence.split(" ")){
        let word = x;
        for (y of dictionary){
            if((x.substr(0, y.length) === y) & (y.length < word.length)) word = y;
        }
        result += word + " ";
    }
    return result.trim();
};