/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function(rooms) {
    const keySet = new Set();
    const recursive = (loc) => {
        rooms[loc].forEach(key => {
            if (key === 0) return;
            const flag = !keySet.has(key);
            keySet.add(key);
            if (flag) recursive(key);
        });
    }
    recursive(0);
    return keySet.size === rooms.length - 1 ? true : false;
};