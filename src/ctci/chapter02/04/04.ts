import LinkedList from "../linked-list/linked-list";

// remove all nodes < x and place in a separate linkedlist
// point last node to head of remnants of original linkedlist

export default function partition(
  l: LinkedList<number>,
  x: number
): LinkedList<number> {
  let newL = new LinkedList<number>();

  let current = l.head;

  while (current != null) {
    if (current.data < x) {
      newL.append(current.data);
      l.delete(current.data);
    }

    current = current.next;
  }

  if (newL.head) {
    let current = newL.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = l.head;
  }

  return newL.head ? newL : l;
}
