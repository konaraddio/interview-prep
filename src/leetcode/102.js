/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let levels = [];

  (function r(node, currentLevel = 0) {
    if (!node || node.visited) {
      return;
    }

    node.visited = true;

    if (!levels[currentLevel]) {
      levels[currentLevel] = [];
    }

    levels[currentLevel].push(node.val);

    r(node.left, currentLevel + 1);
    r(node.right, currentLevel + 1);
  })(root);

  return levels;
};
