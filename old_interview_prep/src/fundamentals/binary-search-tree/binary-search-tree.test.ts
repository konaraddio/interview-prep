import BST from "./binary-search-tree";

// these tests assume the contains method works!

describe("insert", () => {
  test("inserts first element", () => {
    let bst = new BST<number>();
    bst.insert(4);
    expect(bst.contains(4)).toBeTruthy();
  });
  test("inserts multiple elements", () => {
    let bst = new BST<number>();
    bst.insert(4);
    bst.insert(3);
    bst.insert(5);
    bst.insert(4.5);
    bst.insert(7);
    /**
     *     4
     *    / \
     *   3   5
     *      / \
     *    4.5  7
     */
    expect(bst.contains(5)).toBeTruthy();
    expect(bst.contains(4.5)).toBeTruthy();
  });
});

describe("getSize", () => {
  test("size of empty tree is 0", () => {
    let bst = new BST<string>();
    expect(bst.getSize()).toBe(0);
  });
  test("gets correct size of large tree", () => {
    let bst = new BST<number>();
    bst.insert(4);
    bst.insert(3);
    bst.insert(5);
    bst.insert(4.5);
    bst.insert(7);
    /**
     *     4
     *    / \
     *   3   5
     *      / \
     *    4.5  7
     */
    expect(bst.getSize()).toBe(5);
  });
});

describe("delete", () => {
  test("delete a tree with one node", () => {
    let bst = new BST<number>();
    bst.insert(3);
    bst.delete(3);
    expect(bst.contains(3)).toBeFalsy();
  });
  test("delete a leaf", () => {
    let bst = new BST<number>();
    bst.insert(4);
    bst.insert(3);
    bst.insert(5);
    bst.insert(4.5);
    bst.insert(7);
    /**
     *     4
     *    / \
     *   3   5
     *      / \
     *    4.5  7
     */
    bst.delete(3);
    expect(bst.contains(3)).toBeFalsy();
  });
  // deletes a node with one child
  test("delete a node with one child", () => {
    let bst = new BST<number>();
    bst.insert(4);
    bst.insert(3);
    bst.insert(2);
    bst.insert(5);
    bst.insert(4.5);
    bst.insert(7);
    /**
     *     4
     *    / \
     *   3   5
     *  /   / \
     * 2  4.5  7
     */
    bst.delete(3);
    expect(!bst.contains(3) && bst.contains(2)).toBeTruthy();
  });
  // deletes a node with two children
  test("delete a node with two children", () => {
    let bst = new BST<number>();
    bst.insert(4);
    bst.insert(3);
    bst.insert(2);
    bst.insert(5);
    bst.insert(4.5);
    bst.insert(7);
    /**
     *     4
     *    / \
     *   3   5
     *  /   / \
     * 2  4.5  7
     */
    bst.delete(5);
    expect(
      !bst.contains(5) && bst.contains(4.5) && bst.contains(7)
    ).toBeTruthy();
  });
});
