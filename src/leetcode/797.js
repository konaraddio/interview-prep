// https://leetcode.com/problems/all-paths-from-source-to-target/

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  return pathToEndFromStartNode(graph, 0);
};

function pathToEndFromStartNode(graph, node) {
  const endNode = graph.length - 1;
  let allPaths = [];

  if (node == endNode) {
    return [[node]];
  }

  for (let child of graph[node]) {
    let paths = pathToEndFromStartNode(graph, child);
    for (let path of paths) {
      path.unshift(node);
      allPaths.push(path);
    }
  }

  return allPaths;
}
