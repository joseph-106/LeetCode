/**
 * @param {number[][]} grid
 * @return {number}
 */
const numEnclaves = function(grid) {
    let count = 0;
    let temp = 0;
    let flag = true;
    const m = grid.length;
    const n = grid[0].length;
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    const recursive = (x, y) => {
        temp++;
        grid[x][y] = 0;
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (0 <= nx && nx <= m - 1 && 0 <= ny && ny <= n - 1 && grid[nx][ny] === 1) {
                if (nx === 0 || nx === m - 1 || ny === 0 || ny === n - 1) flag = false;
                recursive(nx, ny);
            }
        }
    }
    for (let i = 1; i < m - 1; i ++) {
        for (let j = 1; j < n - 1; j++) {
            temp = 0;
            flag = true;
            if (grid[i][j] === 1) recursive(i, j);
            if (flag) count += temp;
        }
    }
    return count;
};