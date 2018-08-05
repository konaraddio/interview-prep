import NewLinkedList from "./01";

test("removes duplicates", () => {
  let l = new NewLinkedList();
  l.append(1)
    .append(1)
    .append(2)
    .append(2)
    .append(3)
    .append(3)
    .append(3);
  l.removeDups();
  expect(l.getSize()).toBe(3);
});

test("removes nothing if no duplicates", () => {
  let l = new NewLinkedList();
  l.append(1)
    .append(2)
    .append(3);
  l.removeDups();
  expect(l.getSize()).toBe(3);
});
