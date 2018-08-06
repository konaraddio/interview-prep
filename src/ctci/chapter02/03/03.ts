import { LinkedList, Node } from "../linked-list/linked-list";

class NewLinkedList<T> extends LinkedList<T> {
  deleteNodeInMiddle(node: Node<T>): void {
    node.data = node.next.data;
    node.next = node.next.next;
  }
}

export default NewLinkedList;
