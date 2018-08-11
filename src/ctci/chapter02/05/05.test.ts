import LinkedList from "../linked-list/linked-list";
import sumLists from "./05";

test("7->1->6 + 5->9->2 = 2->1->9", () => {
  let l1 = new LinkedList<number>();
  l1.append(7)
    .append(1)
    .append(6);

  let l2 = new LinkedList<number>();
  l2.append(5)
    .append(9)
    .append(2);

  expect(sumLists(l1, l2).head.data).toBe(2);
  expect(sumLists(l1, l2).head.next.data).toBe(1);
  expect(sumLists(l1, l2).head.next.next.data).toBe(9);
  expect(sumLists(l1, l2).getSize()).toBe(3);
});

test("7->1->6 + 5->9 = 2->1->7", () => {
  let l1 = new LinkedList<number>();
  l1.append(7)
    .append(1)
    .append(6);

  let l2 = new LinkedList<number>();
  l2.append(5).append(9);

  expect(sumLists(l1, l2).head.data).toBe(2);
  expect(sumLists(l1, l2).head.next.data).toBe(1);
  expect(sumLists(l1, l2).head.next.next.data).toBe(7);
  expect(sumLists(l1, l2).getSize()).toBe(3);
});

test("7 + 5->9->2 = 2->0->3", () => {
  let l1 = new LinkedList<number>();
  l1.append(7);

  let l2 = new LinkedList<number>();
  l2.append(5)
    .append(9)
    .append(2);

  expect(sumLists(l1, l2).head.data).toBe(2);
  expect(sumLists(l1, l2).head.next.data).toBe(0);
  expect(sumLists(l1, l2).head.next.next.data).toBe(3);
  expect(sumLists(l1, l2).getSize()).toBe(3);
});

test("7 + 5 = 2->1", () => {
  let l1 = new LinkedList<number>();
  l1.append(7);

  let l2 = new LinkedList<number>();
  l2.append(5);

  expect(sumLists(l1, l2).head.data).toBe(2);
  expect(sumLists(l1, l2).head.next.data).toBe(1);
  expect(sumLists(l1, l2).getSize()).toBe(2);
});
