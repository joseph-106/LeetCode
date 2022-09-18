/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function(board, word) {
    let res = false;
    const m = board.length;
    const n = board[0].length;
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    const recursive = (x, y, loc, tempArr) => {
        if (loc === word.length) {
            res = true;
            return;
        } else for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (0 <= nx && nx <= m - 1 && 0 <= ny && ny <= n - 1 && board[nx][ny] === word[loc] && !tempArr.includes(`${nx},${ny}`)) recursive(nx, ny, loc + 1, [...tempArr, `${nx},${ny}`]);
        }
    }
    for (let i = 0; i < m; i ++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) recursive(i, j, 1, [`${i},${j}`]);
            if (res) break;
        }
    }
    return res;
};