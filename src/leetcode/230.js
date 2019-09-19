/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  if (k == 0) {
    return root.val;
  }

  let count = 0;
  let kthElement = null;

  (function getKthElement(root) {
    if (!root) {
      return;
    }

    getKthElement(root.left);

    count++;
    if (count == k) {
      kthElement = root;
      return;
    }

    getKthElement(root.right);
  })(root);

  return kthElement ? kthElement.val : null;
};
