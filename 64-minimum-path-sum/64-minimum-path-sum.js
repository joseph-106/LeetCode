/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const tempGrid = Array.from({length: m}, () => Array(n).fill(Number.MAX_SAFE_INTEGER));
    const recursive = (x, y, sum) => {
        if (sum < tempGrid[x][y]) {
            tempGrid[x][y] = sum;
            if (x < m - 1)  recursive(x + 1, y, tempGrid[x][y] + grid[x + 1][y]);
            if (y < n - 1) recursive(x, y + 1, tempGrid[x][y] + grid[x][y + 1]);
        }
    }
    recursive(0, 0, grid[0][0]);
    return tempGrid[m - 1][n - 1];
};