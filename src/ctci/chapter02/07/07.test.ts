import findIntersection from "./07";
import { LinkedList, Node } from "../linked-list/linked-list";

test("Returns null for empty linkedlists", () => {
  let l1 = new LinkedList<number>();
  let l2 = new LinkedList<number>();

  expect(findIntersection(l1, l2)).toBeNull();
});

test("Returns null for separate linkedlists", () => {
  let l1 = new LinkedList<number>();
  let l2 = new LinkedList<number>();

  l1.append(1)
    .append(2)
    .append(3);
  l2.append(1)
    .append(2)
    .append(3);

  expect(findIntersection(l1, l2)).toBeNull();
});

test("Returns intersecting node for linkedlists of equivalent sizes", () => {
  let l1 = new LinkedList<number>();
  let l2 = new LinkedList<number>();

  l1.head = new Node(1);
  l2.head = new Node(1);
  l1.head.next = new Node(2);
  l2.head.next = new Node(2);

  l2.head.next.next = new Node(999);
  l1.head.next.next = l2.head.next.next;

  l2.head.next.next.next = new Node(4);

  expect(findIntersection(l1, l2)).toEqual(l2.head.next.next);
});

test("Returns intersecting node for linkedlists of different sizes", () => {
  let l1 = new LinkedList<number>();
  let l2 = new LinkedList<number>();

  l1.head = new Node(1);
  l2.head = new Node(1);
  l1.head.next = new Node(2);
  l2.head.next = new Node(2);

  l2.head.next.next = new Node(999);
  l1.head.next.next = new Node(3);
  l1.head.next.next.next = new Node(4);
  l1.head.next.next.next.next = l2.head.next.next;

  l2.head.next.next.next = new Node(4);

  expect(findIntersection(l1, l2)).toEqual(l2.head.next.next);
});
