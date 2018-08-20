import GNode from "./graph";
import breadthFirstSearch from "./breadth-first-search";

// refer to p. 107 in CTCI for the graph used in test

test("searches in the expected order of nodes", () => {
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

  let visited = [];
  const visit = n => visited.push(n.data);

  breadthFirstSearch(n0, visit);
  expect(visited).toEqual([0, 1, 4, 5, 3, 2]);
});
