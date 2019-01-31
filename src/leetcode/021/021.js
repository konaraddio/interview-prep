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
var mergeTwoLists = function(l1, l2) {
  let current = { val: "Dummy", next: null };
  let dummy = current;
  let p1 = l1;
  let p2 = l2;
  while (p1 != null && p2 != null) {
    let newValue;

    if (p1.val < p2.val) {
      newValue = p1.val;
      p1 = p1.next;
    } else {
      newValue = p2.val;
      p2 = p2.next;
    }

    current.next = { val: newValue, next: null };
    current = current.next;
  }

  current.next = p1 || p2;

  return dummy.next;
};

// brute force solution
// put them in an array
// sort the array
// create the linkedlist

// two pointers approach
// 1 2 3 7
//         ^
// 2 4 5 6
//         ^

// new linkedlist: 1, 2, 3, 4, 5, 6, 7
