/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p1 = l1
  let p2 = l2
  const dummyHead = { val: null, next: null }
  let current = dummyHead
  let carry = 0

  while (p1 != null || p2 != null) {
    current.next = { val: null, next: null }
    current = current.next
    let sum = carry

    if (p1 != null) {
      sum += p1.val
      p1 = p1.next
    }

    if (p2 != null) {
      sum += p2.val
      p2 = p2.next
    }

    if (sum >= 10) {
      current.val = sum - 10
      carry = 1
    } else {
      current.val = sum
      carry = 0
    }
  }

  if (carry == 1) {
    current.next = { val: 1, next: null }
  }

  return dummyHead.next
};