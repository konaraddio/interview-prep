class BSTNode<T> {
  data: T;
  left: BSTNode<T>;
  right: BSTNode<T>;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree<T> {
  root: BSTNode<T>;

  constructor() {
    this.root = null;
  }

  insert(data: T): boolean {
    if (!this.root) {
      this.root = new BSTNode<T>(data);
      return true;
    }
    return this.recursiveInsert(this.root, data);
  }

  private recursiveInsert(root: BSTNode<T>, data: T): boolean {
    if (root.data === data) {
      return false; // data already in the tree
    }

    // data should be inserted in the right subtree if greater than the root
    if (data > root.data) {
      if (!root.right) {
        // insert as right child
        root.right = new BSTNode<T>(data);
        return true;
      } else {
        this.recursiveInsert(root.right, data);
      }
    }

    // data should be inserted in the left subtree if less than the root
    if (data < root.data) {
      if (!root.left) {
        // insert as left child
        root.left = new BSTNode<T>(data);
        return true;
      } else {
        this.recursiveInsert(root.left, data);
      }
    }

    return false;
  }

  contains(target: T): boolean {
    if (this.root == null) {
      return false;
    }
    if (this.root.data === target) {
      return true;
    }
    return this.recursiveSearch(this.root, target);
  }

  private recursiveSearch(root: BSTNode<T>, target: T): boolean {
    if (root.data === target) {
      return true;
    }

    // target should be in the right subtree if greater than the root
    if (target > root.data) {
      if (!root.right) {
        return false;
      } else {
        if (root.right.data === target) {
          return true;
        } else {
          return this.recursiveSearch(root.right, target);
        }
      }
    }

    // target should be in the left subtree if less than the root
    if (target < root.data) {
      if (!root.left) {
        return false;
      } else {
        if (root.left.data === target) {
          return true;
        } else {
          return this.recursiveSearch(root.left, target);
        }
      }
    }

    return false;
  }

  getSize(root: BSTNode<T> = this.root): number {
    let numberOfNodes = 0;
    if (root == null) {
      return 0;
    }

    numberOfNodes += 1;

    // recursively get the size of the left and right subtrees
    if (root.left != null) {
      numberOfNodes += this.getSize(root.left);
    }
    if (root.right != null) {
      numberOfNodes += this.getSize(root.right);
    }

    return numberOfNodes;
  }

  delete(target: T, root: BSTNode<T> = this.root) {
    this.root = this.recursiveDelete(target, root);
  }

  private recursiveDelete(target: T, root: BSTNode<T> = this.root): BSTNode<T> {
    if (target == root.data) {
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      } else {
        // has two children
        // replace root's data with that of the min of right subtree
        root.data = this.getMinData(root.right);
        // then delete the min of right subtree
        root.right = this.recursiveDelete(root.data, root.right);
      }
    } else if (target > root.data) {
      if (root.right != null) {
        root.right = this.recursiveDelete(target, root.right);
      }
    } else if (target < root.data) {
      if (root.left != null) {
        root.left = this.recursiveDelete(target, root.left);
      }
    }
    return root;
  }

  private getMinData(root: BSTNode<T>): T {
    let currentNode = root;
    while (!!currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }
}

export default BinarySearchTree;
export { BSTNode };
