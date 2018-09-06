import { ListNode, addTwoNumbers } from "./02";

test("2->4->3 + 5->6->4 = 7->0->8", () => {
  let l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);

  let l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);

  let l3 = new ListNode(7);
  l3.next = new ListNode(0);
  l3.next.next = new ListNode(8);

  expect(addTwoNumbers(l1, l2)).toEqual(l3);
});

test("2->4 + 5->6->4 = 7->0->5", () => {
  let l1 = new ListNode(2);
  l1.next = new ListNode(4);

  let l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);

  let l3 = new ListNode(7);
  l3.next = new ListNode(0);
  l3.next.next = new ListNode(5);

  expect(addTwoNumbers(l1, l2)).toEqual(l3);
});

test("2->4->7 + 5->6->4 = 7->0->5", () => {
  let l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(7);

  let l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);

  let l3 = new ListNode(7);
  l3.next = new ListNode(0);
  l3.next.next = new ListNode(2);
  l3.next.next.next = new ListNode(1);

  expect(addTwoNumbers(l1, l2)).toEqual(l3);
});
