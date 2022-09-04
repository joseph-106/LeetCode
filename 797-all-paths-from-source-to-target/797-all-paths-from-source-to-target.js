/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function(graph) {
    const allArr = [];
    const recursive = (loc, temp) => {
        if (loc === graph.length - 1) allArr.push(temp);
        else graph[loc].forEach(next => {
            recursive(next, [...temp, next]);
        })
    }
    recursive(0, [0]);
    return allArr;
};