import TreeNode from "../../../fundamentals/tree-traversals/treenode";
import isBalanced from "./04";

describe("returns true for balanced tree", () => {
  test("Ex.1", () => {
    let t = new TreeNode<number>(3);
    t.left = new TreeNode<number>(2);
    t.right = new TreeNode<number>(4);

    expect(isBalanced(t)).toBeTruthy();
  });
  test("Ex.2", () => {
    let t = new TreeNode<number>(3);
    t.left = new TreeNode<number>(2);
    t.left.right = new TreeNode<number>(1);
    t.right = new TreeNode<number>(4);

    expect(isBalanced(t)).toBeTruthy();
  });
  test("Ex.3", () => {
    let t = new TreeNode<number>(3);
    t.left = new TreeNode<number>(2);
    t.left.right = new TreeNode<number>(1);
    t.right = new TreeNode<number>(4);
    t.right.left = new TreeNode<number>(0);

    expect(isBalanced(t)).toBeTruthy();
  });
});

describe("returns false for imbalanced tree", () => {
  test("Ex.4", () => {
    let t = new TreeNode<number>(3);
    t.left = new TreeNode<number>(2);
    t.right = new TreeNode<number>(4);
    t.right.right = new TreeNode<number>(5);
    t.right.right.left = new TreeNode<number>(4.5);

    expect(isBalanced(t)).toBeFalsy();
  });
  test("Ex.5", () => {
    let t = new TreeNode<number>(3);
    t.left = new TreeNode<number>(2);
    t.left.right = new TreeNode<number>(1);
    t.right = new TreeNode<number>(4);
    t.right.left = new TreeNode<number>(0);
    t.right.left.left = new TreeNode<number>(12);

    expect(isBalanced(t)).toBeFalsy();
  });
});
