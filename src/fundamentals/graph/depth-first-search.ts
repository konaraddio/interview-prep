import GNode from "./graph";

function depthFirstSearch<T>(
  root: GNode<T>,
  visit: Function = n => console.log(n)
) {
  if (root == null) {
    return;
  }
  visit(root);
  root.visited = true;
  root.children.forEach(node => {
    if (node.visited == false) {
      depthFirstSearch(node, visit);
    }
  });
}

export default depthFirstSearch;
