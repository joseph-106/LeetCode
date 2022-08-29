/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    let count = 0;
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    const height = grid.length;
    const width = grid[0].length;
    const recursive = (x, y) => {
        grid[x][y] = "0"
        for (let i = 0; i <= 3; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (0 <= nx && nx <= height - 1 && 0 <= ny && ny <= width - 1 && grid[nx][ny] === "1") recursive(nx, ny);
        }
    }
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] === "1") {
                count++;
                recursive(i, j);
            }
        }
    }
    return count;
};