import GNode from "../../../fundamentals/graph/graph";
import findRouteBetweenNodes from "./01";

test("returns true if route exists", () => {
  let n0 = new GNode<number>(0);
  let n1 = new GNode<number>(1);
  let n2 = new GNode<number>(2);
  let n3 = new GNode<number>(3);
  let n4 = new GNode<number>(4);
  let n5 = new GNode<number>(5);

  n0.children = [n1, n4, n5];
  n1.children = [n3, n4];
  n2.children = [n1];
  n3.children = [n2, n4];
  n4.children = [];
  n5.children = [];

  expect(findRouteBetweenNodes(n0, n3)).toBeTruthy();
  expect(findRouteBetweenNodes(n2, n3)).toBeTruthy();
});

test("returns false if route does not exist", () => {
  let n0 = new GNode<number>(0);
  let n1 = new GNode<number>(1);
  let n2 = new GNode<number>(2);
  let n3 = new GNode<number>(3);
  let n4 = new GNode<number>(4);
  let n5 = new GNode<number>(5);

  n0.children = [n1, n4, n5];
  n1.children = [n3, n4];
  n2.children = [n1];
  n3.children = [n4];
  n4.children = [];
  n5.children = [];

  expect(findRouteBetweenNodes(n3, n0)).toBeFalsy();
  expect(findRouteBetweenNodes(n5, n2)).toBeFalsy();
});
