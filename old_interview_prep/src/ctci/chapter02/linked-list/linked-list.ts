class Node<T> {
  data: T;
  next: Node<T>;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: Node<T>;

  // compares two pieces of data and returns a boolean (true if equal, false otherwise)
  // useful if the linkedlist should contain objects like {x: 3, y: 4}
  compareData: Function;

  constructor(compareData = (a: T, b: T) => a === b) {
    this.head = null;
    this.compareData = compareData;
  }

  append(data: T): LinkedList<T> {
    const newNode = new Node<T>(data);

    if (this.head == null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

    return this; // makes it easier to chain in tests
  }

  contains(data: T): boolean {
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.data === data) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  delete(data: T): boolean {
    // linkedlist is empty
    if (this.head == null) {
      return false;
    }

    // delete head if head contains the target data
    if (this.head.data === data) {
      this.head = this.head.next;
      return true;
    }

    let prevNode = this.head;
    let currentNode = this.head.next;
    while (currentNode != null) {
      // found target data
      if (currentNode.data === data) {
        // delete node with target data
        prevNode.next = currentNode.next;
        return true;
      }
      prevNode = prevNode.next;
      currentNode = currentNode.next;
    }

    return false;
  }

  getSize(): number {
    let size = 0;
    let currentNode = this.head;
    while (currentNode != null) {
      size++;
      currentNode = currentNode.next;
    }
    return size;
  }
}

export default LinkedList;

export { LinkedList, Node };
