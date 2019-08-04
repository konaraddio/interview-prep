import LinkedList from "../linked-list/linked-list";

class NewLinkedList<T> extends LinkedList<T> {
  getKthFromLast(k: number): T {
    if (!this.head) {
      return null;
    }

    let p1 = this.head;
    let p2 = this.head;

    // move a pointer kth elements ahead
    for (let i = 0; i < k; i++) {
      if (p2.next != null) {
        p2 = p2.next;
      } else {
        return null;
      }
    }

    // move both pointers ahead
    while (p2.next != null) {
      p1 = p1.next;
      p2 = p2.next;
    }

    return p1.data;
  }
}

export default NewLinkedList;
