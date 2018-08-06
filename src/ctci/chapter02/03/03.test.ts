import NewLinkedList from "./03";

test("deletes 3rd node in a linkedlist of 5 elements", () => {
  let l = new NewLinkedList<string>();
  l.append("a")
    .append("b")
    .append("c")
    .append("d")
    .append("e");

  l.deleteNodeInMiddle(l.head.next.next);
  expect(!l.contains("c") && l.getSize() == 4).toBeTruthy();
});

test("deletes 2nd node in a linkedlist of 4 elements", () => {
  let l = new NewLinkedList<string>();
  l.append("a")
    .append("b")
    .append("c")
    .append("d");

  l.deleteNodeInMiddle(l.head.next);
  expect(!l.contains("b") && l.getSize() == 3).toBeTruthy();
});

test("deletes 3rd node in a linkedlist of 4 elements", () => {
  let l = new NewLinkedList<string>();
  l.append("a")
    .append("b")
    .append("c")
    .append("d");

  l.deleteNodeInMiddle(l.head.next.next);
  expect(!l.contains("c") && l.getSize() == 3).toBeTruthy();
});
