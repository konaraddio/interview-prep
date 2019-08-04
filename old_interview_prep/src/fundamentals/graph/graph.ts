// constructed with adjacency list

class Graph<T> {
  nodes: GNode<T>[];

  constructor(nodes: GNode<T>[] = []) {
    this.nodes = nodes;
  }
}

class GNode<T> {
  data: T;
  children: GNode<T>[];
  visited: boolean;

  constructor(data: T, children: GNode<T>[] = []) {
    this.visited = false;
    this.data = data;
    this.children = children;
  }
}

export default GNode;

export { Graph, GNode };
