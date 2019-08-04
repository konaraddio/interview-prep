/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root == null) {
      return null
  }
  
  // swap and left and right nodes
  [root.left, root.right] = [root.right, root.left]
  
  // repeat with left and right subtrees
  invertTree(root.left)
  invertTree(root.right)
  
  return root
};