import GNode from "./graph";
import Queue from "../queue/queue";

function breadthFirstSearch<T>(
  root: GNode<T>,
  visit: Function = n => console.log(n)
) {
  let q = new Queue<GNode<T>>();
  root.visited = true;
  q.enqueue(root);

  while (!q.isEmpty()) {
    const n = q.dequeue();
    visit(n);

    n.children.forEach(child => {
      if (!child.visited) {
        child.visited = true;
        q.enqueue(child);
      }
    });
  }
}

export default breadthFirstSearch;
