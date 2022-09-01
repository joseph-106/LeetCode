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
const goodNodes = function(root) {
    let count = 0;
    const recursive = (node, max) => {
        if (node.val >= max) {
            count++;
            max = node.val;
        }
        if (node.left) recursive(node.left, max);
        if (node.right) recursive(node.right, max);
    }
    recursive(root, root.val);
    return count;
};