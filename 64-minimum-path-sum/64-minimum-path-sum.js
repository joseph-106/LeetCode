/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const tempGrid = Array.from({length: m}, () => []);
    tempGrid[0][0] = grid[0][0];
    for (let i = 1; i < m; i++) {
        const temp = grid[i][0];
        tempGrid[i][0] = tempGrid[i - 1][0] + temp;
    }
    for (let i = 1; i < n; i++) {
        const temp = grid[0][i];
        tempGrid[0][i] = tempGrid[0][i - 1] + temp;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            const temp = grid[i][j];
            tempGrid[i][j] = Math.min(tempGrid[i - 1][j], tempGrid[i][j - 1]) + temp;
        }
    }
    
    return tempGrid[m - 1][n - 1];
};