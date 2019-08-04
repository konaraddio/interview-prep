// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null, next;
  let current = head;
  while (current != null) {
    next = current.next
    current.next = prev;
    prev = current;
    current = next;
  }
  
  return prev;
};
