import Queue from "../../../fundamentals/queue/queue";
import GNode from "../../../fundamentals/graph/graph";

// one-way BFS
function routeBetweenNodes<T>(start: GNode<T>, end: GNode<T>): boolean {
  let q = new Queue<GNode<T>>();
  start.visited = true;
  q.enqueue(start);

  while (!q.isEmpty()) {
    let n = q.dequeue();
    for (let i = 0; i < n.children.length; i++) {
      let child = n.children[i];
      if (child === end) {
        return true;
      }
      if (!child.visited) {
        q.enqueue(child);
      }
    }
  }

  return false;
}

/**
 * I think it'd be faster to do a bidirectional search.
 * A breadth-first search from both nodes where each node has two visit flags
 * (a flag for each search occurring). When one of the searches finds a node
 * visited by the other then we're done.
 */

export default routeBetweenNodes;
