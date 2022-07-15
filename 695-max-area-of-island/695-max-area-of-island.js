/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function(grid) {
    let max = 0;
    let temp = 0;
    const width = grid[0].length;
    const height = grid.length;
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    const recursive = (x, y) => {
        for(let i = 0; i < 4; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (0 <= nx && nx <= height - 1 && 0 <= ny && ny <= width - 1 && grid[nx][ny] === 1) {
                grid[nx][ny] = 0;
                temp++;
                recursive (nx, ny);
            }
        }
    };
    for (let i = 0; i < height; i++){
        for (let j = 0; j < width; j++){
            if (grid[i][j] === 1) {
                grid[i][j] = 0;
                temp++;
                recursive(i, j);
                max = Math.max(max, temp);
                temp = 0;
            }
        }
    }
    return max;
};