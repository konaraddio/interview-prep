import { LinkedList, Node } from "../linked-list/linked-list";
import getStartOfLoop from "./08";

test("returns null if there's no loop", () => {
  let l = new LinkedList<number>();
  l.append(1)
    .append(2)
    .append(3);

  expect(getStartOfLoop(l)).toBeNull();
});

test("returns head if the linkedlist is a circle", () => {
  let l = new LinkedList<number>();
  l.head = new Node(1);
  l.head.next = new Node(2);
  l.head.next.next = l.head;

  expect(getStartOfLoop(l)).toBe(l.head);
});

test("returns start of loop if the linkedlist contains loop", () => {
  let l = new LinkedList<number>();
  l.head = new Node(1);
  l.head.next = new Node(2);
  l.head.next.next = new Node(3); // <---------------,
  l.head.next.next.next = new Node(4); //            |
  l.head.next.next.next.next = l.head.next.next; //--'

  expect(getStartOfLoop(l)).toBe(l.head.next.next);
});
