/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = function(root) {
    const hashObj = {};
    const recursive = (node, lv) => {
        hashObj[lv] ? hashObj[lv].push(node.val) : hashObj[lv] = [node.val];
        if (node.left) recursive(node.left, lv + 1);
        if (node.right) recursive(node.right, lv + 1);
    }
    recursive(root, 0);
    return Object.values(hashObj).map(val => {
        const len = val.length;
        return val.reduce((acc ,cur) => acc + cur, 0) / len;
    })
};