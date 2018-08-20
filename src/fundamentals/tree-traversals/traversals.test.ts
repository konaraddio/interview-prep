import TreeNode from "./treenode";
import { inOrder, preOrder, postOrder } from "./traversals";

let root = new TreeNode<number>(3);

root.left = new TreeNode<number>(1);
root.left.right = new TreeNode<number>(2);

root.right = new TreeNode<number>(5);
root.right.left = new TreeNode<number>(4);

describe("in order", () => {
  test("in order traversal on incomplete tree", () => {
    let traversalArr = [];

    const visit = t => traversalArr.push(t.data);

    inOrder(root, visit);

    expect(traversalArr).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("pre order", () => {
  test("pre order traversal on incomplete tree", () => {
    let traversalArr = [];

    const visit = t => traversalArr.push(t.data);

    preOrder(root, visit);

    expect(traversalArr).toEqual([3, 1, 2, 5, 4]);
  });
});

describe("post order", () => {
  test("post order traversal on incomplete tree", () => {
    let traversalArr = [];

    const visit = t => traversalArr.push(t.data);

    postOrder(root, visit);

    expect(traversalArr).toEqual([2, 1, 4, 5, 3]);
  });
});
