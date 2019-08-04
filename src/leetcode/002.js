// https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function(l1, l2) {
  let dummyHeadOfResult = { val: undefined, next: undefined };
  let current = dummyHeadOfResult;
  let carry = 0;
  while (l1 != null || l2 != null) {
    const a = l1 ? l1.val : 0;
    const b = l2 ? l2.val : 0;
    let sum = a + b + carry;
    carry = 0;
    if (sum > 9) {
      sum -= 10;
      carry = 1;
    }
    current.next = { val: sum, next: undefined };
    current = current.next;

    if (l1 != null) {
      l1 = l1.next;
    }
    if (l2 != null) {
      l2 = l2.next;
    }
  }
  if (carry == 1) {
    current.next = { val: 1, next: undefined };
  }
  return dummyHeadOfResult.next;
};
