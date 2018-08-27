import LinkedList from "../../../fundamentals/linked-list/linked-list";
import TreeNode from "../../../fundamentals/tree-traversals/treenode";

function createLevelLinkedList(
  root: TreeNode<number>,
  listOfLevels: LinkedList<TreeNode<number>>[],
  level = 0
): void {
  if (root != null) {
    let list: LinkedList<TreeNode<number>> = null;
    if (listOfLevels.length < level + 1) {
      list = new LinkedList<TreeNode<number>>();
      listOfLevels.push(list);
    }

    list = listOfLevels[level];
    list.append(root);
    createLevelLinkedList(root.left, listOfLevels, level + 1);
    createLevelLinkedList(root.right, listOfLevels, level + 1);
  }
}

function getLevels(root: TreeNode<number>): LinkedList<TreeNode<number>>[] {
  let listOfLevels = [];
  createLevelLinkedList(root, listOfLevels);
  return listOfLevels;
}

export default getLevels;
