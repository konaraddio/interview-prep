import getLevels from "./03";
import TreeNode from "../../../fundamentals/tree-traversals/treenode";
import LinkedList from "../../../fundamentals/linked-list/linked-list";

describe("gets list of linkedlist levels from tree", () => {
  test("Ex.1", () => {
    let root = new TreeNode<number>(4);
    root.left = new TreeNode<number>(3);
    root.right = new TreeNode<number>(5);

    let l0 = new LinkedList<TreeNode<number>>();
    l0.append(root);

    let l1 = new LinkedList<TreeNode<number>>();
    l1.append(root.left);
    l1.append(root.right);

    const expectedList = [l0, l1];

    expect(JSON.stringify(getLevels(root))).toBe(JSON.stringify(expectedList));
  });
  test("Ex.2", () => {
    let root = new TreeNode<number>(4);
    root.left = new TreeNode<number>(3);
    root.right = new TreeNode<number>(5);
    root.right.left = new TreeNode<number>(12);
    root.right.right = new TreeNode<number>(13);

    let l0 = new LinkedList<TreeNode<number>>();
    l0.append(root);

    let l1 = new LinkedList<TreeNode<number>>();
    l1.append(root.left);
    l1.append(root.right);

    let l2 = new LinkedList<TreeNode<number>>();
    l2.append(root.right.left);
    l2.append(root.right.right);

    const expectedList = [l0, l1, l2];

    expect(JSON.stringify(getLevels(root))).toBe(JSON.stringify(expectedList));
  });
});
