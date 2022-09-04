/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function(graph) {
    const allArr = [];
    const recursive = (loc, tempArr) => {
        if (loc === graph.length - 1) allArr.push(tempArr);
        else graph[loc].forEach(next => {
            if (!tempArr.includes(next)) recursive(next, [...tempArr, next]);
        })
    }
    recursive(0, [0]);
    return allArr;
};