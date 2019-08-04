import { BSTNode, getBSTfromArray } from "./02";

test("[1]", () => {
  let expected = new BSTNode<number>(1);

  expect(getBSTfromArray([1])).toEqual(expected);
});

test("[1,2,3]", () => {
  let expected = new BSTNode<number>(2);
  expected.left = new BSTNode<number>(1);
  expected.right = new BSTNode<number>(3);

  expect(getBSTfromArray([1, 2, 3])).toEqual(expected);
});

test("[1,2,3,4]", () => {
  let expected = new BSTNode<number>(3);
  expected.left = new BSTNode<number>(2);
  expected.left.left = new BSTNode<number>(1);
  expected.right = new BSTNode<number>(4);

  expect(getBSTfromArray([1, 2, 3, 4])).toEqual(expected);
});

test("[1,2,3,4,5]", () => {
  let expected = new BSTNode<number>(3);
  expected.left = new BSTNode<number>(2);
  expected.left.left = new BSTNode<number>(1);
  expected.right = new BSTNode<number>(5);
  expected.right.left = new BSTNode<number>(4);

  expect(getBSTfromArray([1, 2, 3, 4, 5])).toEqual(expected);
});
