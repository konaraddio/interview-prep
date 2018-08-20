import TreeNode from "./treenode";

function inOrder(t: TreeNode<any>, visit: Function = t => console.log(t)) {
  if (t != null) {
    inOrder(t.left, visit);
    visit(t);
    inOrder(t.right, visit);
  }
}

function preOrder(t: TreeNode<any>, visit: Function = t => console.log(t)) {
  if (t != null) {
    visit(t);
    preOrder(t.left, visit);
    preOrder(t.right, visit);
  }
}

function postOrder(t: TreeNode<any>, visit: Function = t => console.log(t)) {
  if (t != null) {
    postOrder(t.left, visit);
    postOrder(t.right, visit);
    visit(t);
  }
}

export { inOrder, preOrder, postOrder };
