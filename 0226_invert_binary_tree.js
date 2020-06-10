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
 * @return {TreeNode}
 */
const invertTree = root => 
{
    if (!root) 
    {
        return null;
    }
    
    const right = root.right;
    root.right = invertTree(root.left);
    root.left = invertTree(right);
    
    return root;
};
