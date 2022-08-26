/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function(g, s) {
    let count = 0;
    let loc = 0;
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    for (let i = 0; i < g.length; i++) {
        for (let j = loc; j < s.length; j++) {
            if (g[i] <= s[j]) {
                s.splice(j, 1);
                loc = j;
                count++;
                break;
            }
        }
    }
    return count;
};