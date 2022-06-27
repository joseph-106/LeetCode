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
 * @return {number}
 */
const sumOfLeftLeaves = function(root) {
    let sum = 0;
    const recursive = (e, leaf) => {
        if (leaf && e.left === null && e.right === null) sum += e.val;
        if (e.left != null) recursive(e.left, true);
        if (e.right != null) recursive(e.right, false);
    };
    recursive(root, false);
    return sum;
};