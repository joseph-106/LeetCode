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
 * @return {string}
 */
const tree2str = function(root) {
    let str = "";
    const recursive = (node) => {
        str += node.val;
        if (node.left) {
            str += "(";
            recursive(node.left);
            str += ")";   
        }
        if (node.right) {
            if (!node.left) str += "()";
            str += "(";
            recursive(node.right);
            str += ")";
        }
    }
    recursive(root);
    return str;
};