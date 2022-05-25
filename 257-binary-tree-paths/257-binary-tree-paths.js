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
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
    const pathArr = [];
    const recursive = (node, path) => {
        if(node.left) recursive(node.left, path + "->" + node.left.val);
        if(node.right) recursive(node.right, path + "->" + node.right.val);
        if(!node.left & !node.right) pathArr.push(path);
    }
    recursive(root, String(root.val));
    return pathArr;
};