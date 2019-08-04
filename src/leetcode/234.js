// https://leetcode.com/problems/palindrome-linked-list/

// Approach: reverse half the linkedlist then check whether it's a palindrome

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head == null) {
    return true;
  }
  let p1 = head;
  let p2 = head;
  let count = 0;
  while (p2 != null) {
    p2 = p2.next;
    count++;
    if (count % 2 == 0) {
      p1 = p1.next;
    }
  }
  const length = count;

  let prev = p1;
  let current = p1.next;
  while (current != null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  let end = prev;
  let start = head;
  count = 0;
  while (count < length) {
    if (start.val != end.val) {
      return false;
    }
    start = start.next;
    end = end.next;
    count++;
  }

  return true;
};
