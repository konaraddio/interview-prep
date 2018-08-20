import { LinkedList, Node } from "../linked-list/linked-list";

function getStartOfLoop<T>(l: LinkedList<T>): Node<T> | null {
  let p1 = l.head;
  let p2 = l.head;

  while (p2 != null && p2.next != null) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) {
      break;
    }
  }

  if (p2 == null || p2.next == null) {
    return null;
  }

  p1 = l.head;

  while (p1 != p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
}

export default getStartOfLoop;
