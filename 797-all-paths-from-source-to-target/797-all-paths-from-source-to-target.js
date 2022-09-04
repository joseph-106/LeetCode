/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function(graph) {
    const allArr = [];
    const recursive = (loc, tempArr) => {
        if (loc === graph.length - 1) allArr.push([...tempArr, loc]);
        for (const num of graph[loc]) recursive(num, [...tempArr, loc]);
    }
    recursive(0, []);
    return allArr;
};