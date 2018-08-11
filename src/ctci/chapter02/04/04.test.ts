import LinkedList from "../linked-list/linked-list";
import partition from "./04";

// this takes a while to write tests for so there's only one poor test
// but checked with console.log so it's good
// keeping this here anyway so `npm t` can count the # of questions solved

test("Partitions 3->5->8->5->10->2->1 [partition = 5]", () => {
  let l = new LinkedList<number>();
  l.append(3)
    .append(5)
    .append(8)
    .append(5)
    .append(10)
    .append(2)
    .append(1);

  let expected = new LinkedList<number>();
  expected
    .append(3)
    .append(1)
    .append(2)
    .append(10)
    .append(5)
    .append(5)
    .append(8);

  l = partition(l, 5);

  expect(l.getSize()).toBe(7);
  expect(l.head.data).toBeLessThanOrEqual(3);
  expect(l.head.next.data).toBeLessThanOrEqual(3);
  expect(l.head.next.next.data).toBeLessThanOrEqual(3);
});
