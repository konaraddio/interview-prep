import TreeNode from "../../../fundamentals/tree-traversals/treenode";

function getHeight<T>(root: TreeNode<T>): number {
  if (root == null) {
    return -1;
  }
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

function isBalanced<T>(root: TreeNode<T>): boolean {
  if (root == null) {
    return true;
  }
  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
}

export default isBalanced;
