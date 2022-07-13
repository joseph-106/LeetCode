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
 * @return {number[][]}
 */
const levelOrder = function(root) {
    const resultArr = [];
    const recursive = (node, lv) => {
        if (resultArr.length === lv) resultArr.push([]);
        resultArr[lv].push(node.val);
        if (node.left) recursive(node.left, lv + 1);
        if (node.right) recursive(node.right, lv + 1);
    };
    if (root) recursive(root, 0);
    return resultArr;
};