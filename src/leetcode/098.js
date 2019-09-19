// https://leetcode.com/problems/validate-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return validateBSTHelper(root)
  
  function validateBSTHelper(root, lower, upper) {
    if (!root) {
      return true;
    }

    if ((lower != null && root.val <= lower) || (upper != null && root.val >= upper)) {
      return false;
    }

    return (
      validateBSTHelper(root.left, lower, root.val) &&
      validateBSTHelper(root.right, root.val, upper)
    );
  }
};

// alternative was to use check the in-order traversal
