import NewLinkedList from "./02";

test("gets 4th from last element in a linkedlist with 5 elements (so the head)", () => {
  let l = new NewLinkedList<number>();
  l.append(1)
    .append(2)
    .append(3)
    .append(4)
    .append(5);

  expect(l.getKthFromLast(4)).toBe(1);
});

test("gets last element in a linkedlist with 7 elements", () => {
  let l = new NewLinkedList<number>();
  l.append(1)
    .append(2)
    .append(3)
    .append(4)
    .append(5)
    .append(6)
    .append(7);

  expect(l.getKthFromLast(0)).toBe(7);
});

test("returns null if K >= length of linkedlist", () => {
  let l = new NewLinkedList<number>();
  l.append(1)
    .append(2)
    .append(3)
    .append(4)
    .append(5)
    .append(6)
    .append(7);

  expect(l.getKthFromLast(7)).toBeNull();
});
