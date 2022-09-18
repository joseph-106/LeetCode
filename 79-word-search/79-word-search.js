/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function(board, word) {
    let res = false;
    const m = board.length;
    const n = board[0].length;
    const recursive = (i, j, loc) => {
        if (loc === word.length) {
            res = true;
            return;
        }
        if (i >= m || j >= n || i < 0 || j < 0) return;
        if (board[i][j] !== word[loc]) return;
        const prev = board[i][j];
        board[i][j] = '*';
        recursive(i + 1, j, loc + 1);
        recursive(i, j + 1, loc + 1);
        recursive(i - 1, j, loc + 1);
        recursive(i, j - 1, loc + 1);
        board[i][j] = prev;
    }
    for (let i = 0; i < m; i ++) {
        for (let j = 0; j < n; j++) {
            recursive(i, j, 0);
            if (res) break;
        }
    }
    return res;
};