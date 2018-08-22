import { BSTNode } from "../../../fundamentals/binary-search-tree/binary-search-tree";

function getBSTfromArray(arr: number[]): BSTNode<number> {
  const centerOfArr = Math.round((arr.length - 1) / 2);
  let root = new BSTNode<number>(arr[centerOfArr]);

  if (arr.length > 0) {
    if (centerOfArr > 0) {
      root.left = getBSTfromArray(arr.slice(0, centerOfArr));
    }
    if (centerOfArr < arr.length - 1) {
      root.right = getBSTfromArray(arr.slice(centerOfArr + 1, arr.length));
    }
  }

  return root;
}

export default getBSTfromArray;
export { BSTNode, getBSTfromArray };
